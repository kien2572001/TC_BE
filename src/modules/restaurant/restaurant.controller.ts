import { V1GetRestaurantByNameParamDto } from './dto/get-restaurant-by-name.dto';
import { Body, Controller, Get, Post, Query , Param, Inject,forwardRef} from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { RestaurantService } from './restaurant.service';
import { V1GetRestaurantByName } from './entities/get-restaurant-by-name.entity';
import { V2GetRestaurantList } from './entities/get-restaurant-list.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { V1PostRestaurantBodyDto } from './dto/post-restaurants.dto';
import { FoodService } from '../food/food.service';
import { ReviewService } from '../review/review.service';
@ApiBearerAuth()
@ApiTags('API Restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    @Inject(forwardRef(()=>FoodService))
    private readonly foodService: FoodService,
    @Inject(forwardRef(()=>ReviewService))
    private readonly reviewService: ReviewService) {}
    

  @Public()
  @Get()
  @ApiOperation({ summary: 'Test vui thoi' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(): string {
    return 'This action returns all cats';
  }

  @Public()
  @Post()
  @ApiBearerAuth('BearerAuth')
  @ApiOperation({ summary: 'Create restaurant' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createRestaurant(@Body() body: V1PostRestaurantBodyDto) {
    return this.restaurantService.createRestaurant(body);
  }

  @Public()
  @Get('/all')
  @ApiOperation({ summary: 'Get all restaurant' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllRestaurant(): Promise<V2GetRestaurantList> {
    return this.restaurantService.getAllRestaurant();
  }

  @Public()
  @Get('/search')
  @ApiOperation({ summary: 'Get restaurant by name' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: V1GetRestaurantByName,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getRestaurantByName(
    @Query() query: V1GetRestaurantByNameParamDto,
  ): Promise<V1GetRestaurantByName> {
    return this.restaurantService.getRestaurantByName(query);
  }

  //Restaurant detail
  @Public()
  @Get('/detail/:id')
  @ApiOperation({ summary: 'Get restaurant detail by id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getRestaurantById(
    @Param() param
  ): Promise<any> {
    return this.restaurantService.getRestaurantById(param);
  }

  @Public()
  @Get('/detail/menu/:restaurantId')
  @ApiOperation({ summary: 'Get restaurant menu by id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getFoodsByRestaurantId(
    @Param() param
  ): Promise<any> {
    return this.foodService.getFoodsByRestaurantId(param);
  }

  @Public()
  @Get('/detail/reviews/:restaurantId')
  @ApiOperation({ summary: 'Get review by restaurant id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getReviewsByRestaurantId(@Param() param) {
    return this.reviewService.getReviewsByRestaurantId(param);
  }


}
