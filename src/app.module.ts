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
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'secret123!',
      database: process.env.DB_NAME ?? 'pc_prearmadas',
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
