import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ERole } from 'src/core/enum/default.enum';
import { Public } from 'src/decorator/public.decorator';
import { Roles } from 'src/decorator/roles.decorator';
import { VUserLoginDto } from './dto/user-login.dto';
import { VUserRegisterDto } from './dto/user-register.dto';
import { UserService } from './user.service';
import { VRefreshToken } from './dto/refresh-token.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/register')
  userRegister(@Body() userLogin: VUserRegisterDto) {
    return this.userService.userRegister(userLogin);
  }

  @Public()
  @Post('/login')
  userLogin(@Body() userLogin: VUserLoginDto) {
    return this.userService.userLogin(userLogin);
  }

  @Public()
  @Post('/refresh-token')
  refreshToken(@Body() body: VRefreshToken) {
    return this.userService.refreshToken(body);
  }

  @Roles([ERole.USER])
  @Get('/all')
  getAllUser() {
    return this.userService.getAllUser();
  }
}
