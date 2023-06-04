import { UserData } from './../../decorator/user.decorator';
import { UserService } from './../user/user.service';
import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/database/entity/restaurant.entity';
import { Like, Repository } from 'typeorm';
import { V1GetRestaurantByNameParamDto } from './dto/get-restaurant-by-name.dto';
import {
  V1GetRestaurantByName,
  V1Restaurant,
} from './entities/get-restaurant-by-name.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async getRestaurantByName(
    query: V1GetRestaurantByNameParamDto,
  ): Promise<V1GetRestaurantByName> {
    const { name } = query;
    const restaurantsRaw = await this.restaurantRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });

    const restaurants: V1Restaurant[] = await Promise.all(
      restaurantsRaw.map(async (item) => {
        const restaurant = {
          id: item.id,
          name: item.name,
          address: item.address,
          photoUrl: item.photoUrl,
          activeTime: item.activeTime,
          isDraft: item.isDraft,
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
