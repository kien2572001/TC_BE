import { ERole } from 'src/core/enum/default.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './review.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  password: string;

  @Column({ name: 'avatar', type: 'varchar', length: 100, nullable: true })
  avatar: string;

  @Column({ name: 'role', type: 'enum', enum: ERole, default: ERole.USER })
  role: ERole;

  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  refreshToken: string;

  @ManyToOne(() => Review, (review) => review.user)
  reviews: Review[];
}
