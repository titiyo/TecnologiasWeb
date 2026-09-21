import { Module } from '@nestjs/common';
import { UsosService } from './usos.service';
import { UsosController } from './usos.controller';

@Module({
  controllers: [UsosController],
  providers: [UsosService],
})
export class UsosModule {}
