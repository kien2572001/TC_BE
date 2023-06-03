import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Public()
  @Get('/all')
  getAllFood() {
    return this.foodService.getAllFood();
  }


  @Public()
  @Get('/cheap')
  filterFoodByCheapPrice() {
    return this.foodService.filterFoodByCheapPrice();
  }

}
