import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './review.entity';
import { Food } from './food.entity';
import { EStatus } from 'src/core/enum/default.enum';

@Entity('restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'address', type: 'varchar', length: 100 })
  address: string;

  @Column({ name: 'photo_url', type: 'varchar', length: 256, nullable: true })
  photoUrl: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 100,
    default: EStatus.INACTIVE,
  })
  status: EStatus;

  @Column({ name: 'active_time', type: 'varchar', length: 100 })
  activeTime: string;

  @Column({ name: 'is_draft', type: 'boolean' })
  isDraft: boolean;

  @OneToMany(() => Review, (review) => review.restaurant)
  reviews: Review[];

  @OneToMany(() => Food, (food) => food.restaurant)
  foods: Food[];
}
