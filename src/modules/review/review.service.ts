import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/database/entity/review.entity';
import { Repository } from 'typeorm';
import { V1GetReviewsByUserIdParamDto } from './dto/get-reviews-by-user-id.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    // eslint-disable-next-line no-unused-vars
    private userService: UserService,
  ) {}
 
  
  async getReviewsByRestaurantId(param): Promise<any> {
    const { restaurantId } = param;
    
    const reviewRaw = await this.reviewRepository.find({
      where: { restaurantId: restaurantId },
    });
    const ratingSum = reviewRaw.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0);

    const user = await this.userService.getUserById(reviewRaw[0].userId);
    const reviews = reviewRaw.map((review) => {
      return {
        ...review,
        userName : user.name,
        userAvatar : user.avatar,
      };
    });
    const rating = ratingSum / reviewRaw.length;

    const result = {
      rating,
      reviews: reviews,
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
    const user = await this.userService.getUserById(reviewRaw[0].userId);
    const reviews = reviewRaw.map((review) => {
      return {
        ...review,
        userName : user.name,
        userAvatar : user.avatar,
      };
    });
    const result = {
      rating,
      reviews: reviews,
    };
    return result;
  }

  async getReviewsByUserId(param: V1GetReviewsByUserIdParamDto): Promise<any> {
    const { userId } = param;
    const id = parseInt(userId, 10);

    const user = await this.userService.getUserById(id);
    if (!user) {
      return { user: {}, review: [] };
    }
    const reviewsRaw = await this.reviewRepository.find({
      where: { userId: id },
    });
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const result = {
      user: userData,
      review: reviewsRaw,
    };
    return result;
  }
}
