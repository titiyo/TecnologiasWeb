import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;
}
