import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePcPrearmadaDto } from './dto/create-pc-prearmada.dto';
import { UpdatePcPrearmadaDto } from './dto/update-pc-prearmada.dto';
import { PcPrearmada } from './entities/pc-prearmada.entity';
import { UsosService } from '../usos/usos.service';

@Injectable()
export class PcPrearmadasService {
  constructor(
    @InjectRepository(PcPrearmada)
    private readonly pcPrearmadasRepository: Repository<PcPrearmada>,
    private readonly usosService: UsosService,
  ) {}

  async create(createPcPrearmadaDto: CreatePcPrearmadaDto) {
    const { usoId, ...rest } = createPcPrearmadaDto;
    await this.usosService.findOne(usoId);
    const nuevaPc = this.pcPrearmadasRepository.create({
      ...rest,
      uso: { id: usoId },
    });
    return this.pcPrearmadasRepository.save(nuevaPc);
  }

  findAll(usoId?: number) {
    return this.pcPrearmadasRepository.find({
      relations: { uso: true },
      where: usoId ? { uso: { id: usoId } } : undefined,
    });
  }

  async findOne(id: number) {
    const pc = await this.pcPrearmadasRepository.findOne({
      where: { id },
      relations: { uso: true },
    });
    if (!pc) {
      throw new NotFoundException(`La PC prearmada con ID ${id} no existe.`);
    }
    return pc;
  }

  async update(id: number, updatePcPrearmadaDto: UpdatePcPrearmadaDto) {
    const { usoId, ...rest } = updatePcPrearmadaDto;
    if (usoId !== undefined) {
      await this.usosService.findOne(usoId);
    }
    const pc = await this.findOne(id);
    Object.assign(pc, rest);
    if (usoId !== undefined) {
      pc.uso = { id: usoId } as PcPrearmada['uso'];
    }
    return this.pcPrearmadasRepository.save(pc);
  }

  async remove(id: number) {
    const result = await this.pcPrearmadasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`La PC prearmada con ID ${id} no existe.`);
    }
    return {
      message: `La PC prearmada con ID ${id} ha sido eliminada.`,
      status: 'success',
    };
  }
}
