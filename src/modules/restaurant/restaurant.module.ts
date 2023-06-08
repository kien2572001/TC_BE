import { Module, forwardRef } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/database/entity/restaurant.entity';
import { UserModule } from '../user/user.module';
import { ReviewModule } from '../review/review.module';
import { FoodModule } from '../food/food.module';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant]), ReviewModule,forwardRef(() => FoodModule),],
  controllers: [RestaurantController],
  providers: [RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
