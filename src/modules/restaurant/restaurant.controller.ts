import { V1GetRestaurantByNameParamDto } from './dto/get-restaurant-by-name.dto';
import { Body, Controller, Get, Post, Query , Param} from '@nestjs/common';
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
@ApiBearerAuth()
@ApiTags('API Restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

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
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: V1GetRestaurantByName,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getRestaurantById(
    @Param() param
  ): Promise<V1GetRestaurantByName> {
    return this.restaurantService.getRestaurantById(param);
  }

  

}
