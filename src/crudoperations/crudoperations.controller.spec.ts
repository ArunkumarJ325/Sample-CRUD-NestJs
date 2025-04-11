import { Test, TestingModule } from '@nestjs/testing';
import { CrudoperationsController } from './crudoperations.controller';
import { CrudoperationsService } from './crudoperations.service';

describe('CrudoperationsController', () => {
  let controller: CrudoperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudoperationsController],
      providers: [CrudoperationsService],
    }).compile();

    controller = module.get<CrudoperationsController>(CrudoperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
