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

  @Column({
    name: 'avatar',
    type: 'varchar',
    length: 100,
    nullable: true,
    default:
      'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
  })
  avatar: string;

  @Column({ name: 'role', type: 'enum', enum: ERole, default: ERole.USER })
  role: ERole;

  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  refreshToken: string;

  @ManyToOne(() => Review, (review) => review.user)
  reviews: Review[];
}
