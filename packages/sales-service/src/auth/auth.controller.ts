import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { UserDto } from 'src/auth/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerDto: RegisterDto): Promise<UserDto|null> {
    return await this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
    const { access_token } = await this.authService.login(req.user);
    
    res.cookie('access_token', access_token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
    }).send({ status: 'ok' });
  }

  @Get('logout')
  logout(@Res() res: Response) {
    //@TODO - Invalidate JWT
    return res.clearCookie('access_token', {path: '/'}).send({ status: 'ok' });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  } 
}