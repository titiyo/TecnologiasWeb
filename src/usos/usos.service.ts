import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';
import { Uso } from './entities/uso.entity';

@Injectable()
export class UsosService {
  private usos: Uso[] = [
    new Uso(1, 'Gaming'),
    new Uso(2, 'Oficina'),
    new Uso(3, 'Doméstico'),
    new Uso(4, 'Estudio'),
  ]; // In-memory storage for usos

  create(createUsoDto: CreateUsoDto) {
    const newUso = new Uso(this.usos.length + 1, createUsoDto.nombre);
    this.usos.push(newUso);
    return newUso;
  }

  findAll() {
    return this.usos;
  }

  findOne(id: number) {
    const uso = this.usos.find((uso) => uso.id === id);
    if (!uso) {
      throw new NotFoundException(`El uso con ID ${id} no existe.`);
    }
    return uso;
  }

  update(id: number, updateUsoDto: UpdateUsoDto) {
    const uso = this.findOne(id);
    if (updateUsoDto.nombre !== undefined) {
      uso.nombre = updateUsoDto.nombre;
    }
    return uso;
  }

  remove(id: number) {
    const index = this.usos.findIndex((uso) => uso.id === id);
    if (index === -1) {
      throw new NotFoundException(`El uso con ID ${id} no existe.`);
    }
    this.usos.splice(index, 1);
    return `El uso con ID ${id} ha sido eliminado.`;
  }
}
