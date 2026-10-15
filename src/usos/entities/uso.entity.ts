import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Componente } from '../../componentes/entities/componente.entity';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Componente, (componente) => componente.uso)
  componentes!: Componente[];
}
