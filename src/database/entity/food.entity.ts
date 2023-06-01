import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './review.entity';

@Entity('food')
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'photo_url', type: 'varchar', length: 256, nullable: true })
  photoUrl: string;

  @Column({ name: 'price', type: 'int' })
  price: number;

  @Column({ name: 'restaurant_id', type: 'int' })
  restaurantId: number;

  @Column({ name: 'is_draft', type: 'boolean' })
  isDraft: boolean;

  @OneToMany(() => Review, (review) => review.food)
  reviews: Review[];
}
