import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';
import { Uso } from './entities/uso.entity';

@Injectable()
export class UsosService implements OnModuleInit {
  constructor(
    @InjectRepository(Uso)
    private readonly usosRepository: Repository<Uso>,
  ) {}

  async onModuleInit() {
    const count = await this.usosRepository.count();
    if (count === 0) {
      await this.usosRepository.save([
        { nombre: 'Gaming' },
        { nombre: 'Oficina' },
        { nombre: 'Doméstico' },
        { nombre: 'Estudio' },
      ]);
    }
  }

  create(createUsoDto: CreateUsoDto) {
    return this.usosRepository.save(createUsoDto);
  }

  findAll() {
    return this.usosRepository.find();
  }

  async findOne(id: number) {
    const uso = await this.usosRepository.findOneBy({ id });
    if (!uso) {
      throw new NotFoundException(`El uso con ID ${id} no existe.`);
    }
    return uso;
  }

  async update(id: number, updateUsoDto: UpdateUsoDto) {
    const uso = await this.findOne(id);
    Object.assign(uso, updateUsoDto);
    return this.usosRepository.save(uso);
  }

  async remove(id: number) {
    const uso = await this.usosRepository.findOne({
      where: { id },
      relations: { pcPrearmadas: true },
    });
    if (!uso) {
      throw new NotFoundException(`El uso con ID ${id} no existe.`);
    }
    if (uso.pcPrearmadas.length > 0) {
      throw new ConflictException(
        `No se puede eliminar el uso con ID ${id} porque tiene PCs prearmadas asociadas.`,
      );
    }
    await this.usosRepository.delete(id);
    return {
      message: `El uso con ID ${id} ha sido eliminado.`,
      status: 'success',
    };
  }
}
