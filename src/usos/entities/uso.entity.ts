import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PcPrearmada } from '../../pc-prearmadas/entities/pc-prearmada.entity';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => PcPrearmada, (pcPrearmada) => pcPrearmada.uso)
  pcPrearmadas!: PcPrearmada[];
}
