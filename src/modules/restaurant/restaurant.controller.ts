import { V1GetRestaurantByNameParamDto } from './dto/get-restaurant-by-name.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { RestaurantService } from './restaurant.service';
import { V1GetRestaurantByName } from './entities/get-restaurant-by-name.entity';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Public()
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('/all')
  getAllRestaurant() {
    return this.restaurantService.getAllRestaurant();
  }

  @Public()
  @Get('/search')
  getRestaurantByName(
    @Query() query: V1GetRestaurantByNameParamDto,
  ): Promise<V1GetRestaurantByName> {
    return this.restaurantService.getRestaurantByName(query);
  }
}
