import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BedTypes } from '../../common/types';
import { Hotel } from '../../hotels/entities/hotel.entity';
import { Booking } from '../../bookings/entities/booking.entity';

@Index(['bed_type', 'createdAt'])
@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price!: number;

  @Column({
    type: 'int',
  })
  total_rooms!: number;
  @Column({
    type: 'int',
  })
  max_people!: number;

  @Column({
    type: 'enum',
    enum: BedTypes,
  })
  bed_type!: BedTypes;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  //   relations
  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotelId!: Hotel;

  @OneToMany(() => Booking, (booking) => booking.roomId)
  bookings?: Booking[];
}
