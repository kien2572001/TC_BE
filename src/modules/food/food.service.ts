import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/database/entity/food.entity';
import { LessThan, Repository } from 'typeorm';


@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food)
        private foodRepository: Repository<Food>,
    ) {}

    async getAllFood() {
        return await this.foodRepository.find();
      }

    
      async getFoods(
        @Param('isFood') isFood: boolean,
        @Param('maxPrice') maxPrice: number,
        ) {
        if (isFood && maxPrice) {
            return await this.foodRepository.find({
                where: {
                isFood: isFood,
                price: LessThan(maxPrice),
                },
            });
            }
        if (isFood) {
            return await this.foodRepository.find({
                where: {
                isFood: isFood,
                },
            });
            }
        if (maxPrice) {
            return await this.foodRepository.find({
                where: {
                price: LessThan(maxPrice),
                },
            });
            }
        return await this.foodRepository.find();
    }
    
}
