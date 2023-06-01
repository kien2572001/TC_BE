import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ERole } from 'src/core/enum/default.enum';

export class VUserRegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  role: ERole;
}
