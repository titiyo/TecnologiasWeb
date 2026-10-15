import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentesService } from './componentes.service';
import { ComponentesController } from './componentes.controller';
import { Componente } from './entities/componente.entity';
import { UsosModule } from '../usos/usos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Componente]), UsosModule],
  controllers: [ComponentesController],
  providers: [ComponentesService],
})
export class ComponentesModule {}
