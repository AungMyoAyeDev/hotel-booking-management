import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Room } from '../../rooms/entities/room.entity';
import { HotelTypes } from '../../common/types';

@Index(['name', 'price', 'createdAt'])
@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({
    type: 'decimal',
  })
  price!: number;
  @Column()
  decription!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  address!: string;

  @Column({
    type: 'int',
  })
  rating!: string;

  @Column({
    type: 'text',
    array: true,
    default: [],
  })
  amentities!: string[];

  @Column({
    type: 'enum',
    enum: HotelTypes,
    default: HotelTypes.HOTEL,
  })
  type!: HotelTypes;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  //   Relations
  @OneToMany(() => Room, (room) => room.hotelId)
  rooms?: Room[];
}
