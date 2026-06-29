import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../common/types/type';
import { Review } from '../../reviews/entities/review.entity';
import { Booking } from '../../bookings/entities/booking.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    length: 255,
  })
  name!: string;

  @Index()
  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role!: Role;

  @Column()
  city?: string;

  @Column()
  country?: string;

  @Column()
  phone?: string;

  @Column()
  token?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  //   relations
  @OneToMany(() => Review, (review) => review.user)
  reviews?: Review[];
  @OneToMany(() => Booking, (booking) => booking.userId)
  bookings?: Booking[];
}
