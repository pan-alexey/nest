import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { PrometheusModule } from '~/modules/prometeus/prometheus.module';

describe('AppController', () => {
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
      imports: [PrometheusModule],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const main = await homeController.main();
      expect(main).toBe('123');
    });
  });
});
