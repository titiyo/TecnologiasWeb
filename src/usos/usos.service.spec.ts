import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsosService } from './usos.service';
import { Uso } from './entities/uso.entity';

describe('UsosService', () => {
  let service: UsosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsosService,
        {
          provide: getRepositoryToken(Uso),
          useValue: {
            count: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            findOneBy: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsosService>(UsosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
