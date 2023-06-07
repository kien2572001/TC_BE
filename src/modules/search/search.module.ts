import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { FoodModule } from '../food/food.module';

@Module({
  imports: [RestaurantModule, FoodModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
