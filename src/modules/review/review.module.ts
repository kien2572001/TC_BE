import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Review } from 'src/database/entity/review.entity';
import { FoodsController } from './foods/foods.controller';
import { FoodsService } from './foods/foods.service';
import { FoodsModule } from './foods/foods.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), FoodsModule],
  controllers: [ReviewController, FoodsController],
  providers: [ReviewService, FoodsService],
  exports: [ReviewService],
})
export class ReviewModule {}
