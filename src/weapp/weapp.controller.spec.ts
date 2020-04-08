import { Test, TestingModule } from '@nestjs/testing';
import { WeappController } from './weapp.controller';

describe('Weapp Controller', () => {
  let controller: WeappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeappController],
    }).compile();

    controller = module.get<WeappController>(WeappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
