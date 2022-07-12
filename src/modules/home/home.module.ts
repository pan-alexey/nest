import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { MetricsModule } from '~/modules/metrics/metrics.module';

@Module({
  providers: [HomeService],
  controllers: [HomeController],
  imports: [MetricsModule],
})
export class HomeModule {}
