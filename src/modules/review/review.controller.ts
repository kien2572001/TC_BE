import { Controller, Get, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';
@ApiBearerAuth()
@ApiTags('API Reviews')
@Controller('reviews')
export class ReviewController {
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
}
