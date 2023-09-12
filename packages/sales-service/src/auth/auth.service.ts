import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserDto } from 'src/auth/dto/user.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(registerDto.password, salt);

      const { confirmPassword, ...userData } = registerDto;

      const user = await this.prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('User already exists')
        }
      }

      throw error;
    }
  }

  async validateUser(loginDto: LoginDto): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({where: {email: loginDto.email}})
    
    if(!user) throw new UnauthorizedException('Invalid email or password')
    
    const passwordsMatch = await bcrypt.compare(loginDto.password, user.password);

    if(!passwordsMatch) throw new UnauthorizedException('Invalid email or password')

    //Omitting password from user model
    const {password, ...rest} = user

    return rest
  }

  /**
   * user attached to request by passport
   * 
   * @param user 
   * @returns string
   */
  async login(user: any) {
    //Signs JWT token to user
    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
    };
  }
}
