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
  @Get('/filterCheap')
  filterFoodByCheapPrice() {
    return this.foodService.filterFoodByCheapPrice();
  }

  @Public()
  @Get('/filterFood')
  filterFood() {
    return this.foodService.filterFood();
  }

  @Public()
  @Get('/filterDrink')
  filterDrink() {
    return this.foodService.filterDrink();
  }


}
