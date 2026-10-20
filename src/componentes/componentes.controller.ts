import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';

@Controller('componentes')
export class ComponentesController {
  constructor(private readonly componentesService: ComponentesService) {}

  @Post()
  create(@Body() createComponenteDto: CreateComponenteDto) {
    return this.componentesService.create(createComponenteDto);
  }

  @Get()
  findAll(
    @Query('usoId', new ParseIntPipe({ optional: true })) usoId?: number,
    @Query('nombre') nombre?: string,
  ) {
    return this.componentesService.findAll(usoId, nombre);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.componentesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateComponenteDto: UpdateComponenteDto,
  ) {
    return this.componentesService.update(id, updateComponenteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.componentesService.remove(id);
  }
}
