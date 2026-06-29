import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { HotelTypes } from '../../common/types/type';
import { Room } from '../../rooms/entities/room.entity';

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

  @Column()
  amentites!: string;

  @Column({
    type: 'int',
  })
  rating!: string;

  @Column({
    type: 'array',
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
