import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { ReviewModule } from '../review/review.module';
import { Restaurant } from 'src/database/entity/restaurant.entity';
import { Review } from 'src/database/entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food, Restaurant, Review]), ReviewModule],
  controllers: [FoodController],
  providers: [FoodService],
  exports: [FoodService],
})
export class FoodModule {}
