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
import { MAX_ID, MAX_PRECIO } from '../common/limites';

const CAMPOS_PERMITIDOS = ['nombre', 'tipo', 'marca', 'precio', 'usoId'];

// La columna precio guarda 2 decimales: se redondea antes de guardar para que la respuesta
// coincida con lo que queda en la base.
const redondear = (precio: number) => Math.round(precio * 100) / 100;

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
    // Sin body (o sin Content-Type) Nest entrega undefined, y un array o un texto tampoco sirven.
    if (!dto || typeof dto !== 'object' || Array.isArray(dto)) {
      throw new BadRequestException('el body debe ser un objeto JSON');
    }

    const errores: string[] = [];

    // Solo se aceptan estos campos. Un id en el body haría que save() pise un registro existente,
    // y un objeto uso se saltearía la validación de usoId.
    for (const campo of Object.keys(dto)) {
      if (campo === 'id') {
        errores.push('el id no se puede enviar en el body');
      } else if (!CAMPOS_PERMITIDOS.includes(campo)) {
        errores.push(`campo no permitido: ${campo}`);
      }
    }

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
      } else if (dto.precio > MAX_PRECIO) {
        errores.push(`precio no puede superar ${MAX_PRECIO}`);
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
      precio: redondear(rest.precio),
      uso: { id: usoId },
    });
    return this.componentesRepository.save(nuevoComponente);
  }

  async findAll(usoId?: number, nombre?: string) {
    const where: FindOptionsWhere<Componente> = {};
    if (usoId !== undefined) {
      // Un id fuera de rango no puede existir: el filtro no encuentra nada (y no llega a la base).
      if (usoId < 1 || usoId > MAX_ID) return [];
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
    const componente =
      id > MAX_ID
        ? null
        : await this.componentesRepository.findOne({
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
    if (rest.precio !== undefined) {
      componente.precio = redondear(rest.precio);
    }
    if (usoId !== undefined) {
      componente.uso = { id: usoId } as Componente['uso'];
    }
    return this.componentesRepository.save(componente);
  }

  async remove(id: number) {
    const result =
      id > MAX_ID
        ? { affected: 0 }
        : await this.componentesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`El componente con ID ${id} no existe.`);
    }
    return {
      message: `El componente con ID ${id} ha sido eliminado.`,
      status: 'success',
    };
  }
}
