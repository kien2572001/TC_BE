import { Controller, Get, Post, Query, Body, Param, Put } from '@nestjs/common';
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
import { V1PostFoodsDto } from './dto/post-foods.dto';
import { ReviewService } from '../review/review.service';
import { ERole } from 'src/core/enum/default.enum';
import { Roles } from 'src/decorator/roles.decorator';

@ApiBearerAuth()
@ApiTags('API Foods')
@Controller('foods')
export class FoodController {
  // eslint-disable-next-line no-unused-vars
  constructor(
    private readonly foodService: FoodService,

    private readonly reviewService: ReviewService,
  ) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create food' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createFood(@Body() body: V1PostFoodsDto) {
    return this.foodService.createFood(body);
  }

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
    if (query.isFood === 'true') {
      return this.foodService.getFoods();
    }
    if (query.isFood === 'false') {
      return this.foodService.getDrinks();
    }
    if (query.cheap === 'true') {
      return this.foodService.getCheapFoods();
    }
    if (query.highRating === 'true') {
      return this.foodService.getHighRatingFoods();
    } else {
      return this.foodService.getAllFood();
    }
  }

  //Food detail API

  @Public()
  @Get('/detail/:id')
  @ApiOperation({ summary: 'Get food detail by id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getFoodDetailById(@Param() param): Promise<any> {
    return this.foodService.getFoodDetailById(param);
  }

  @Public()
  @Get('/detail/reviews/:foodId')
  @ApiOperation({ summary: 'Get review by food id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getReviewsByRestaurantId(@Param() param) {
    return this.reviewService.getReviewsByFoodId(param);
  }

  @Roles([ERole.ADMIN])
  @Get('/admin/all')
  @ApiOperation({ summary: 'Get all restaurant' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllListFood(): Promise<any> {
    return this.foodService.getAllListFood();
  }

  @Roles([ERole.ADMIN])
  @Get('/admin/search')
  @ApiOperation({ summary: 'Get all restaurant' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  searchFoods(@Query() query: any): Promise<any> {
    return this.foodService.searchFoods(query);
  }

  @Roles([ERole.ADMIN])
  @Put('/admin/update/:id')
  @ApiOperation({ summary: 'Update status restaurant' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  updateStatusFood(@Param() param: any, @Body() body: any): Promise<any> {
    return this.foodService.updateStatusFood(param, body);
  }
}
