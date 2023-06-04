import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { FoodService } from './food.service';
import e from 'express';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Public()
  @Get('/all')
  async getAllFood() {
    return await this.foodService.getAllFood();
  }

  @Public()
  @Get('/search')
  getFoodByName(@Query() query): Promise<any> {
    return this.foodService.getFoodByName(query);
  }

  @Public()
  @Get('/filter')
  async getFoods(
    @Query('isFood') isFood: boolean,
    @Query('cheap') cheap: boolean,
    @Query('highRating') highRating: boolean,
  ) {
    return await this.foodService.getFoods(isFood, cheap, highRating);
  }
}
