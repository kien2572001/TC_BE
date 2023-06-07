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

   async getAvgRating(id, type): Promise<any> {
    let reviewRaw;
    switch (type) {
      case 'restaurant':
        reviewRaw = await this.reviewRepository.find({
          where: { restaurantId: id },
        });
        break;
      case 'food':
        reviewRaw = await this.reviewRepository.find({
          where: { foodId: id },
        });
        break;
      default:
        return { rating: 0, reviews: [] };
    }
    const ratingSum = reviewRaw.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0);

    const rating = ratingSum / reviewRaw.length;

    return rating;
  }
}
