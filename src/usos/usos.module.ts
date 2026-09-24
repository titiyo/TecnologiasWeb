import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsosService } from './usos.service';
import { UsosController } from './usos.controller';
import { Uso } from './entities/uso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uso])],
  controllers: [UsosController],
  providers: [UsosService],
})
export class UsosModule {}
