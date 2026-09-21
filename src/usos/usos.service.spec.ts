import { Test, TestingModule } from '@nestjs/testing';
import { UsosService } from './usos.service';

describe('UsosService', () => {
  let service: UsosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsosService],
    }).compile();

    service = module.get<UsosService>(UsosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
