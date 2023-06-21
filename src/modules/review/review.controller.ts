import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ReviewService } from './review.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';
import { V1GetReviewsByUserIdParamDto } from './dto/get-reviews-by-user-id.dto';
import { Roles } from 'src/decorator/roles.decorator';
import { ERole } from 'src/core/enum/default.enum';
import { V1PostRestaurantReviewBodyDto } from './dto/post-restaurant-review.dto';
@ApiBearerAuth()
@ApiTags('API Reviews')
@Controller('reviews')
export class ReviewController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly reviewService: ReviewService) {}

  @Public()
  @Get('restaurants/:restaurantId')
  @ApiOperation({ summary: 'Get review by restaurant id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getReviewsByRestaurantId(@Param() param) {
    return this.reviewService.getReviewsByRestaurantId(param);
  }

  @Public()
  @Get('foods/:foodId')
  @ApiOperation({ summary: 'Get review by food id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getReviewsByFoodId(@Param() param) {
    return this.reviewService.getReviewsByFoodId(param);
  }

  @Public()
  @Get('users/:userId')
  @ApiOperation({ summary: 'Get review by user id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getReviewsByUserId(@Param() param: V1GetReviewsByUserIdParamDto) {
    return this.reviewService.getReviewsByUserId(param);
  }

  @Roles([ERole.USER])
  @Post('restaurant/:restaurantId')
  @ApiBearerAuth('BearerAuth')
  @ApiOperation({ summary: 'Create restaurant review' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createRestaurant(
    @Body() body: V1PostRestaurantReviewBodyDto,
    @Param() param,
    @Request() req,
  ) {
    return this.reviewService.createRestaurantReview(body, param, req);
  }
}
