import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Uso } from '../../usos/entities/uso.entity';

@Entity()
export class PcPrearmada {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  procesador!: string;

  @Column()
  ram!: number;

  @Column()
  almacenamiento!: string;

  @Column({ nullable: true })
  placaVideo?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio!: number;

  @Column()
  fuente!: string;

  @Column()
  gabinete!: string;

  @ManyToOne(() => Uso, (uso) => uso.pcPrearmadas)
  @JoinColumn({ name: 'uso_id' })
  uso!: Uso;
}
