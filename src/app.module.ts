import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsosModule } from './usos/usos.module';
import { PcPrearmadasModule } from './pc-prearmadas/pc-prearmadas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret123!',
      database: 'pc_prearmadas',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsosModule,
    PcPrearmadasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
