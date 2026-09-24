import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PcPrearmadasService } from './pc-prearmadas.service';
import { CreatePcPrearmadaDto } from './dto/create-pc-prearmada.dto';
import { UpdatePcPrearmadaDto } from './dto/update-pc-prearmada.dto';

@Controller('pc-prearmadas')
export class PcPrearmadasController {
  constructor(private readonly pcPrearmadasService: PcPrearmadasService) {}

  @Post()
  create(@Body() createPcPrearmadaDto: CreatePcPrearmadaDto) {
    return this.pcPrearmadasService.create(createPcPrearmadaDto);
  }

  @Get()
  findAll() {
    return this.pcPrearmadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcPrearmadasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePcPrearmadaDto: UpdatePcPrearmadaDto,
  ) {
    return this.pcPrearmadasService.update(+id, updatePcPrearmadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcPrearmadasService.remove(+id);
  }
}
