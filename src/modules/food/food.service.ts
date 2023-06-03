import { Injectable } from '@nestjs/common';
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

    async filterFoodByCheapPrice() {
        return await this.foodRepository.find({
            where: {
                price: LessThan(20)
            }
        })
    }
}
