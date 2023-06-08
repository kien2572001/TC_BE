import { RestaurantService } from './../restaurant/restaurant.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { Repository, Like, getConnection } from 'typeorm';
import { ReviewService } from '../review/review.service';
import { V1GetFoodsByNameParamDto } from './dto/get-foods-by-name.dto';
import {
  V1FoodByName,
  V1FoodDetailByName,
} from './entities/get-foods-by-name.entity';
import { V1PostFoodsDto } from './dto/post-foods.dto';
@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
    private reviewService: ReviewService,
    private restaurantService: RestaurantService,
  ) {}

  async createFood(body: V1PostFoodsDto) {
    const { restaurantId } = body;

    const restaurant = await this.restaurantService.getRestaurantById(
      restaurantId,
    );
    if (!restaurant) {
      return {
        message: 'Restaurant not found',
        food: null,
      };
    }

    const food = await this.foodRepository.save(body);
    if (!food) {
      return {
        message: 'Create food failed',
        food: null,
      };
    }
    return {
      food,
      message: 'Food created successfully',
    };
  }

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

  async getFoodByName(query: V1GetFoodsByNameParamDto): Promise<V1FoodByName> {
    const { name } = query;

    const foodRaw = await this.foodRepository.find({
      where: {
        name: Like(`%${name}%`),
        isDraft: false,
      },
    });

    if (!foodRaw.length) {
      return {
        foods: [],
        total: 0,
      };
    }

    const dataRaw = await Promise.all(
      foodRaw.map(async (food) => {
        const restaurant = await this.restaurantService.getRestaurantById(1);
        const reviews = await this.reviewService.getAvgRating(food.id, 'food');
        return {
          ...food,
          restaurant,
          rating: reviews.rating,
          reviews: reviews.reviews,
        };
      }),
    );

    const foods: V1FoodDetailByName[] = dataRaw.map((food) => {
      return {
        id: food.id,
        name: food.name,
        price: food.price,
        photoUrl: food.photoUrl,
        isFood: food.isFood,
        rating: food.rating,
        restaurant: {
          id: food.restaurant.id,
          name: food.restaurant.name,
          address: food.restaurant.address,
          photoUrl: food.restaurant.photoUrl,
          activeTime: food.restaurant.activeTime,
        },
      };
    });

    const result: V1FoodByName = {
      foods,
      total: foods.length,
    };
    return result;
  }
}
