import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { BookingTypes } from '../../common/types';
import { Room } from '../../rooms/entities/room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({
    type: 'decimal',
  })
  total_price!: number;
  @Column()
  guest!: number;
  @Column()
  quantity!: number;
  @Column({
    type: 'date',
  })
  checkIn!: Date;
  @Column({
    type: 'date',
  })
  checkOut!: Date;

  @Column({
    type: 'enum',
    enum: BookingTypes,
    default: BookingTypes.DRAFT,
  })
  status!: BookingTypes;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  //   Relations
  @ManyToOne(() => User, (user) => user.reviews)
  userId!: User;
  @ManyToOne(() => Room, (room) => room.bookings)
  roomId!: Room;
}
