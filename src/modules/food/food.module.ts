import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [TypeOrmModule.forFeature([Food]), ReviewModule],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
