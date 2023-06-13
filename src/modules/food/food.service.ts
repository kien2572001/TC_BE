import { RestaurantService } from './../restaurant/restaurant.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { Repository, Like, LessThan } from 'typeorm';
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
    const foodRaw = await this.foodRepository.find();
    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });

        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
  }

  async getFoods(): Promise<any> {
    const foodRaw = await this.foodRepository.find({
      where: {
        isFood: true,
      },
    });
    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });

        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
  }

  async getDrinks(): Promise<any> {
    const foodRaw = await this.foodRepository.find({
      where: {
        isFood: false,
      },
    });
    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });

        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
  }

  async getCheapFoods(): Promise<any> {
    const foodRaw = await this.foodRepository.find({
      where: {
        price: LessThan(50000),
      },
    });
    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });

        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
  }

  async getHighRatingFoods(): Promise<any> {
    const foodRaw = await this.foodRepository.find();
    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });
        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        if (reviews.rating < 4) {
          return;
        }

        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
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
        const restaurant = await this.restaurantService.getRestaurantById({
          id: food.restaurantId,
        });
        const reviews = await this.reviewService.getReviewsByFoodId(food.id);

        return {
          ...food,
          restaurant,
          rating: reviews.rating || null,
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
        description: food.description,
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

  async getFoodsByRestaurantId(param) {
    const { restaurantId } = param;
    const foodRaw = await this.foodRepository.find({
      where: {
        restaurantId: restaurantId,
      },
    });
    if (foodRaw.length === 0) {
      return {
        foods: [],
        total: 0,
      };
    }

    const foods = await Promise.all(
      foodRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByFoodId({
          foodId: item.id,
        });

        const restaurant = await this.restaurantService.getRestaurantById({
          id: item.restaurantId,
        });
        const food = {
          id: item.id,
          name: item.name,
          price: item.price,
          photoUrl: item.photoUrl,
          isFood: item.isFood,
          description: item.description,
          restaurantId: item.restaurantId,
          restaurant: restaurant.name,
          rating: reviews.rating,
        };
        return food;
      }),
    );
    return {
      foods,
      message: 'Get all food successfully',
    };
  }

  async getFoodDetailById(param) {
    const { id } = param;
    const foodRaw = await this.foodRepository.findOne({
      where: {
        id: id,
      },
    });
    const reviews = await this.reviewService.getReviewsByFoodId({
      foodId: foodRaw.id,
    });

    const restaurant = await this.restaurantService.getRestaurantById({
      id: foodRaw.restaurantId,
    });

    const food = {
      id: foodRaw.id,
      name: foodRaw.name,
      price: foodRaw.price,
      photoUrl: foodRaw.photoUrl,
      isFood: foodRaw.isFood,
      description: foodRaw.description,
      restaurantId: foodRaw.restaurantId,
      restaurant: restaurant.name,
      rating: reviews.rating,
    };
    return {
      food,
      message: 'Get food successfully',
    };
  }
}
