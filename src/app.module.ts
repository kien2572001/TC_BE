import { Module, Res } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './global/auth/guards/jwt-auth.guard';
import { RolesGuard } from './global/auth/guards/roles.guard';
import { EConfiguration } from './core/config/configuration.config';
import { UserModule } from './modules/user/user.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { FoodModule } from './modules/food/food.module';
import { ReviewModule } from './modules/review/review.module';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(EConfiguration.DB_POSTGRESQL_HOST),
        port: configService.get<number>(EConfiguration.DB_POSTGRESQL_PORT),
        username: configService.get(EConfiguration.DB_POSTGRESQL_USER),
        password: configService.get(EConfiguration.DB_POSTGRESQL_PASSWORD),
        database: configService.get(EConfiguration.DB_POSTGRESQL_NAME),
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: false,
        autoLoadEntities: true,
        migrations: ['src/migration/**/*.ts'],
        subscribers: ['src/subscriber/**/*.ts'],
      }),
    }),
    UserModule,
    RestaurantModule,
    FoodModule,
    ReviewModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
