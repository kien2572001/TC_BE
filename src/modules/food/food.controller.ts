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
  @Get('/filter/:isFood/:maxPrice')
  async getFoods(
    @Param('isFood') isFood: boolean,
    @Param('maxPrice') maxPrice: number,
  ) {
    return await this.foodService.getFoods(isFood, maxPrice);
  }  
    
  }
  


