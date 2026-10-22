import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  BadRequestException,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsosService } from './usos.service';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';

@Controller('usos')
export class UsosController {
  constructor(private readonly usosService: UsosService) {}

  // Dos usos son el mismo si sus nombres coinciden sin contar espacios ni mayúsculas.
  private normalizar(nombre: string) {
    return nombre.trim().toLowerCase();
  }

  // Solo se acepta "nombre". Un id en el body haría que save() pise un uso existente.
  private validarCampos(dto: unknown) {
    // Sin body (o sin Content-Type) Nest entrega undefined, y un array o un texto tampoco sirven.
    if (!dto || typeof dto !== 'object' || Array.isArray(dto)) {
      throw new BadRequestException('el body debe ser un objeto JSON');
    }
    const errores: string[] = [];
    for (const campo of Object.keys(dto)) {
      if (campo === 'id') {
        errores.push('el id no se puede enviar en el body');
      } else if (campo !== 'nombre') {
        errores.push(`campo no permitido: ${campo}`);
      }
    }
    if (errores.length > 0) {
      throw new BadRequestException(errores);
    }
  }

  @Post()
  async create(@Body() createUsoDto: CreateUsoDto) {
    this.validarCampos(createUsoDto);
    if (
      typeof createUsoDto.nombre !== 'string' ||
      createUsoDto.nombre.trim() === ''
    ) {
      throw new BadRequestException(
        'nombre es obligatorio y debe ser un texto no vacío',
      );
    }
    const nombre = createUsoDto.nombre.trim();
    const usos = await this.usosService.findAll();
    const existingUso = usos.find(
      (uso) => this.normalizar(uso.nombre) === this.normalizar(nombre),
    );
    if (existingUso) {
      throw new ConflictException(`El uso con nombre "${nombre}" ya existe.`);
    }
    return this.usosService.create({ ...createUsoDto, nombre });
  }

  @Get()
  findAll(@Query('nombre') nombre?: string) {
    return this.usosService.findAll(nombre);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usosService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsoDto: UpdateUsoDto,
  ) {
    this.validarCampos(updateUsoDto);
    let dto = updateUsoDto;
    if (updateUsoDto.nombre !== undefined) {
      if (
        typeof updateUsoDto.nombre !== 'string' ||
        updateUsoDto.nombre.trim() === ''
      ) {
        throw new BadRequestException('nombre debe ser un texto no vacío');
      }
      const nombre = updateUsoDto.nombre.trim();
      const usos = await this.usosService.findAll();
      const existingUso = usos.find(
        (uso) =>
          this.normalizar(uso.nombre) === this.normalizar(nombre) &&
          uso.id !== id,
      );
      if (existingUso) {
        throw new ConflictException(`El uso con nombre "${nombre}" ya existe.`);
      }
      dto = { ...updateUsoDto, nombre };
    }
    return this.usosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usosService.remove(id);
  }
}
