import { Test, TestingModule } from '@nestjs/testing';
import { UsosController } from './usos.controller';
import { UsosService } from './usos.service';

describe('UsosController', () => {
  let controller: UsosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsosController],
      providers: [UsosService],
    }).compile();

    controller = module.get<UsosController>(UsosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
