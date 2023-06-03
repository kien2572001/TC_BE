import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Public()
  @Get('/all')
  getAllRestaurant() {
    return this.restaurantService.getAllRestaurant();
  }

}
