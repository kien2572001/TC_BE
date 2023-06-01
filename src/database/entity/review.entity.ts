import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Food } from './food.entity';
import { Restaurant } from './restaurant.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'rate', type: 'int' })
  rate: number;

  @Column({ name: 'content', type: 'varchar', length: 256 })
  content: string;

  @Column({ name: 'food_id', type: 'int' })
  foodId: number;

  @Column({ name: 'restaurant_id', type: 'int' })
  restaurantId: number;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Food, (food) => food.reviews)
  @JoinColumn({ name: 'food_id' })
  food: Food;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.reviews)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;
}
