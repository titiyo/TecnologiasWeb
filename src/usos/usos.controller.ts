import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
} from '@nestjs/common';
import { UsosService } from './usos.service';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';

@Controller('usos')
export class UsosController {
  constructor(private readonly usosService: UsosService) {}

  @Post()
  async create(@Body() createUsoDto: CreateUsoDto) {
    const usos = await this.usosService.findAll();
    const existingUso = usos.find((uso) => uso.nombre === createUsoDto.nombre);
    if (existingUso) {
      throw new ConflictException(
        `El uso con nombre "${createUsoDto.nombre}" ya existe.`,
      );
    }
    return this.usosService.create(createUsoDto);
  }

  @Get()
  findAll() {
    return this.usosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsoDto: UpdateUsoDto) {
    const nombre = updateUsoDto.nombre;
    if (nombre !== undefined) {
      if (nombre.trim() === '') {
        throw new ConflictException('El nombre no puede estar vacío.');
      }
      const usos = await this.usosService.findAll();
      const existingUso = usos.find(
        (uso) => uso.nombre === nombre && uso.id !== +id,
      );
      if (existingUso) {
        throw new ConflictException(`El uso con nombre "${nombre}" ya existe.`);
      }
    }
    return this.usosService.update(+id, updateUsoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usosService.remove(+id);
  }
}
