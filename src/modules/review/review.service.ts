import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/database/entity/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async getReviewsByRestaurantId(param): Promise<any> {
    const { restaurantId } = param;
    const reviewRaw = await this.reviewRepository.find({
      where: { restaurantId: restaurantId },
    });
    const ratingSum = reviewRaw.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0);

    const rating = ratingSum / reviewRaw.length;

    const result = {
      rating,
      reviews: reviewRaw,
    };
    return result;
  }

  async getReviewsByFoodId(param): Promise<any> {
    const { foodId } = param;
    const reviewRaw = await this.reviewRepository.find({
      where: { foodId: foodId },
    });
    const ratingSum = reviewRaw.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0);

    const rating = ratingSum / reviewRaw.length;

    const result = {
      rating,
      reviews: reviewRaw,
    };
    return result;
  }
}
