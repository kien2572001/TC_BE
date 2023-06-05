import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { FoodService } from './food.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { V1FoodByName } from './entities/get-foods-by-name.entity';
import { V1GetFoodsByNameParamDto } from './dto/get-foods-by-name.dto';

@ApiBearerAuth()
@ApiTags('API Foods')
@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Public()
  @Get('/all')
  @ApiOperation({ summary: 'Get all foods' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllFood() {
    return this.foodService.getAllFood();
  }

  @Public()
  @Get('/search')
  @ApiOperation({ summary: 'Get food by name' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: V1FoodByName,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getFoodByName(
    @Query() query: V1GetFoodsByNameParamDto,
  ): Promise<V1FoodByName> {
    return this.foodService.getFoodByName(query);
  }

  @Public()
  @Get('/filter')
  @ApiOperation({ summary: 'Filter food' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getFoods(@Query() query): Promise<any> {
    return this.foodService.getFoods(query);
  }
}
