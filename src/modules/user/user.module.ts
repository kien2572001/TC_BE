import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entity/user.entity';
import { JwtStrategy } from 'src/global/auth/strategy/jwt.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EConfiguration } from 'src/core/config/configuration.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get(EConfiguration.JWT_SECRET),
        signOptions: {
          expiresIn: configService.get(EConfiguration.ACCESS_TOKEN_EXPIRES_IN),
        },
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
