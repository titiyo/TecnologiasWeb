import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcPrearmadasService } from './pc-prearmadas.service';
import { PcPrearmadasController } from './pc-prearmadas.controller';
import { PcPrearmada } from './entities/pc-prearmada.entity';
import { UsosModule } from '../usos/usos.module';

@Module({
  imports: [TypeOrmModule.forFeature([PcPrearmada]), UsosModule],
  controllers: [PcPrearmadasController],
  providers: [PcPrearmadasService],
})
export class PcPrearmadasModule {}
