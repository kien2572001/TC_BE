import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/database/entity/restaurant.entity';
import { Like, Repository } from 'typeorm';
import { V1GetRestaurantByNameParamDto } from './dto/get-restaurant-by-name.dto';
import {
  V1GetRestaurantByName,
  V1Restaurant,
} from './entities/get-restaurant-by-name.entity';
import {
  V2GetRestaurantList,
  V2Restaurant,
} from './entities/get-restaurant-list.entity';
import { ReviewService } from '../review/review.service';
import { V1PostRestaurantBodyDto } from './dto/post-restaurants.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    private reviewService: ReviewService,
  ) {}
  async getRestaurantById(param): Promise<any> {
    const { id } = param;
    const restaurantRaw = await this.restaurantRepository.findOne({
      where: { id: id },
    });
    const reviews = await this.reviewService.getReviewsByRestaurantId({
      restaurantId: id,
    });
    if (!restaurantRaw) {
      return {
        message: 'Restaurant not found',
        restaurant: null,
      };
    }
    const restaurant = {
      ...restaurantRaw,
      rating: reviews.rating,
    };
    return restaurant;
  }

  async createRestaurant(body: V1PostRestaurantBodyDto): Promise<any> {
    const { name, address, photoUrl, activeTime, isDraft } = body;
    const newRestaurant = this.restaurantRepository.save({
      name,
      address,
      photoUrl,
      activeTime,
      isDraft,
    });
    return newRestaurant;
  }

  async getAllRestaurant(): Promise<V2GetRestaurantList> {
    const restaurantsRaw = await this.restaurantRepository.find();
    const restaurants: V2Restaurant[] = await Promise.all(
      restaurantsRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByRestaurantId({
          restaurantId: item.id,
        });
        console.log(item.id);
        const restaurant = {
          ...item,
          rating: reviews.rating,
        };
        return restaurant;
      }),
    );

    const results: V2GetRestaurantList = {
      restaurants,
      total: restaurants.length,
    };

    return results;
  }

  async getRestaurantByName(
    query: V1GetRestaurantByNameParamDto,
  ): Promise<V1GetRestaurantByName> {
    const { name } = query;
    const restaurantsRaw = await this.restaurantRepository.find({
      where: {
        name: Like(`%${name}%`),
        isDraft: false,
      },
    });

    const restaurants: V1Restaurant[] = await Promise.all(
      restaurantsRaw.map(async (item) => {
        const reviews = await this.reviewService.getReviewsByRestaurantId({
          restaurantId: item.id,
        });
        const restaurant = {
          id: item.id,
          name: item.name,
          address: item.address,
          photoUrl: item.photoUrl,
          activeTime: item.activeTime,
          rating: reviews.rating,
        };
        return restaurant;
      }),
    );

    const results: V1GetRestaurantByName = {
      restaurants,
      total: restaurants.length,
    };

    return results;
  }
}
