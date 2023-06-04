import { Injectable, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { LessThan, MoreThanOrEqual, Repository, Raw } from 'typeorm';
import { ReviewService } from '../review/review.service';
import { Review } from 'src/database/entity/review.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ) {}

  async getAllFood() {
    return await this.foodRepository.find();
  }

  async getFoods(
    @Query('isFood') isFood: boolean,
    @Query('cheap') cheap: boolean,
    @Query('highRating') highRating: boolean,
  ): Promise<Food[]> {
    const query = this.foodRepository.createQueryBuilder('food');

    if (isFood) {
      query.andWhere('food.isFood = :isFood', { isFood });
    }

    if (cheap) {
      query.andWhere('food.price < :price', { price: 50000 });
    }

    if (highRating) {
      query
        .leftJoinAndSelect(
          'food.reviews',
          'review',
          'review.food_id = food.id',
          { rate: 4 },
        )
        .groupBy('food.id,review.id')
        .having('AVG(review.rate) >= :rate', { rate: 4 });
    }

    return await query.getMany();
  }

    
    
}
