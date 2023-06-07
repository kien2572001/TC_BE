import { Injectable } from '@nestjs/common';
import { FoodService } from '../food/food.service';
import { RestaurantService } from '../restaurant/restaurant.service';
import { V1SearchByKeyQueryDto } from './dto/search-by-key.dto';

@Injectable()
export class SearchService {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly foodService: FoodService,
  ) {}

  async searchByKey(query: V1SearchByKeyQueryDto): Promise<any> {
    const { keyword } = query;
    const restaurantRaw = await this.restaurantService.getRestaurantByName({
      name: keyword,
    });
    const foodRaw = await this.foodService.getFoodByName({
      name: keyword,
    });

    const result = {
      restaurant: restaurantRaw.restaurants,
      food: foodRaw.foods,
    };

    return result;
  }
}
