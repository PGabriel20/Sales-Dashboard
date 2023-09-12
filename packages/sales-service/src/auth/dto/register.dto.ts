import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "src/auth/decorators/match.decorator";

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(30)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message: "Password must contain at least one uppercase letter, one number, and one special character",
  })
  password: string;
  
  @IsString()
  @IsNotEmpty()
  @Match('password', { message: 'Passwords must match' })
  confirmPassword: string;
}