import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  // Valida el body a mano y junta todos los errores en un solo 400.
  // parcial = true (PATCH): solo se chequean los campos que vinieron.
  private validar(dto: Partial<CreateComponenteDto>, parcial: boolean) {
    const errores: string[] = [];

    for (const campo of ['nombre', 'tipo', 'marca'] as const) {
      const valor = dto[campo];
      if (valor === undefined && parcial) continue;
      if (typeof valor !== 'string' || valor.trim() === '') {
        errores.push(`${campo} es obligatorio y debe ser un texto no vacío`);
      }
    }

    if (dto.precio !== undefined || !parcial) {
      if (
        typeof dto.precio !== 'number' ||
        !isFinite(dto.precio) ||
        dto.precio < 0
      ) {
        errores.push(
          'precio es obligatorio y debe ser un número mayor o igual a 0',
        );
      }
    }

    if (dto.usoId !== undefined || !parcial) {
      if (!Number.isInteger(dto.usoId)) {
        errores.push('usoId es obligatorio y debe ser un número entero');
      }
    }

    if (errores.length > 0) {
      throw new BadRequestException(errores);
    }
  }

  async create(createComponenteDto: CreateComponenteDto) {
    this.validar(createComponenteDto, false);
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
    this.validar(updateComponenteDto, true);
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
