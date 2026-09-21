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
  create(@Body() createUsoDto: CreateUsoDto) {
    const usos = this.usosService.findAll();
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
  update(@Param('id') id: string, @Body() updateUsoDto: UpdateUsoDto) {
    return this.usosService.update(+id, updateUsoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usosService.remove(+id);
  }
}
