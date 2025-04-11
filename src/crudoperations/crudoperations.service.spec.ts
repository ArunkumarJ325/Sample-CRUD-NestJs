import { Test, TestingModule } from '@nestjs/testing';
import { CrudoperationsService } from './crudoperations.service';

describe('CrudoperationsService', () => {
  let service: CrudoperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudoperationsService],
    }).compile();

    service = module.get<CrudoperationsService>(CrudoperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
