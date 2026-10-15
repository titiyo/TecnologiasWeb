import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { Componente } from './entities/componente.entity';
import { UsosService } from '../usos/usos.service';

@Injectable()
export class ComponentesService {
  constructor(
    @InjectRepository(Componente)
    private readonly componentesRepository: Repository<Componente>,
    private readonly usosService: UsosService,
  ) {}

  async create(createComponenteDto: CreateComponenteDto) {
    const { usoId, ...rest } = createComponenteDto;
    await this.usosService.findOne(usoId);
    const nuevoComponente = this.componentesRepository.create({
      ...rest,
      uso: { id: usoId },
    });
    return this.componentesRepository.save(nuevoComponente);
  }

  findAll(usoId?: number, nombre?: string) {
    const where: FindOptionsWhere<Componente> = {};
    if (usoId) {
      where.uso = { id: usoId };
    }
    if (nombre) {
      where.nombre = ILike(`%${nombre}%`);
    }
    return this.componentesRepository.find({
      relations: { uso: true },
      where,
    });
  }

  async findOne(id: number) {
    const componente = await this.componentesRepository.findOne({
      where: { id },
      relations: { uso: true },
    });
    if (!componente) {
      throw new NotFoundException(`El componente con ID ${id} no existe.`);
    }
    return componente;
  }

  async update(id: number, updateComponenteDto: UpdateComponenteDto) {
    const { usoId, ...rest } = updateComponenteDto;
    if (usoId !== undefined) {
      await this.usosService.findOne(usoId);
    }
    const componente = await this.findOne(id);
    Object.assign(componente, rest);
    if (usoId !== undefined) {
      componente.uso = { id: usoId } as Componente['uso'];
    }
    return this.componentesRepository.save(componente);
  }

  async remove(id: number) {
    const result = await this.componentesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`El componente con ID ${id} no existe.`);
    }
    return {
      message: `El componente con ID ${id} ha sido eliminado.`,
      status: 'success',
    };
  }
}
