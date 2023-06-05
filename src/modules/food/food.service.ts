import { Injectable, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { LessThan, MoreThanOrEqual, Repository, Raw, Like } from 'typeorm';
import { ReviewService } from '../review/review.service';
import { Review } from 'src/database/entity/review.entity';
import { Restaurant } from 'src/database/entity/restaurant.entity';
@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async getAllFood() {
    return await this.foodRepository.find();
  }

  async getFoods(query: {
    isFood: boolean;
    cheap: boolean;
    highRating: boolean;
  }): Promise<Food[]> {
    const queryBuilder = this.foodRepository.createQueryBuilder('food');
    const { isFood, cheap, highRating } = query;

    if (isFood) {
      queryBuilder.andWhere('food.isFood = :isFood', { isFood });
    }

    if (cheap) {
      queryBuilder.andWhere('food.price < :price', { price: 50000 });
    }

    if (highRating) {
      queryBuilder
        .leftJoinAndSelect(
          'food.reviews',
          'review',
          'review.food_id = food.id',
          { rate: 4 },
        )
        .groupBy('food.id,review.id')
        .having('AVG(review.rate) >= :rate', { rate: 4 });
    }

    return await queryBuilder.getMany();
  }

  async getFoodByName(query: { name: string }): Promise<any> {
    const { name } = query;

    const foodRaw = await this.foodRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });

    const result = await Promise.all(
      foodRaw.map(async (food) => {
        const restaurant = await this.restaurantRepository.findOne({
          where: {
            id: food.restaurantId,
          },
        });
        const reviews = await this.reviewRepository.find({
          where: {
            foodId: food.id,
          },
        });
        return {
          ...food,
          restaurant,
          reviews,
        };
      }),
    );

    return result;
  }
}
