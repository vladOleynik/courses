import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  @Index()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
