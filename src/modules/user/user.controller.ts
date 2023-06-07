import { Body, Controller, Get, Post } from '@nestjs/common';
import { ERole } from 'src/core/enum/default.enum';
import { Public } from 'src/decorator/public.decorator';
import { Roles } from 'src/decorator/roles.decorator';
import { VUserLoginDto } from './dto/user-login.dto';
import { VUserRegisterDto } from './dto/user-register.dto';
import { UserService } from './user.service';
import { VRefreshToken } from './dto/refresh-token.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('API User')
@Controller('user')
export class UserController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/register')
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  userRegister(@Body() userLogin: VUserRegisterDto) {
    return this.userService.userRegister(userLogin);
  }

  @Public()
  @Post('/login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  userLogin(@Body() userLogin: VUserLoginDto) {
    return this.userService.userLogin(userLogin);
  }

  @Public()
  @Post('/refresh-token')
  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  refreshToken(@Body() body: VRefreshToken) {
    return this.userService.refreshToken(body);
  }

  @Roles([ERole.USER])
  @Get('/all')
  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllUser() {
    return this.userService.getAllUser();
  }
}
