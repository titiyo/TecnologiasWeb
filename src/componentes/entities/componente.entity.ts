import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Uso } from '../../usos/entities/uso.entity';

@Entity()
export class Componente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  tipo!: string;

  @Column()
  marca!: string;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string | null) =>
        value === null ? null : parseFloat(value),
    },
  })
  precio!: number;

  @ManyToOne(() => Uso, (uso) => uso.componentes)
  @JoinColumn({ name: 'uso_id' })
  uso!: Uso;
}
