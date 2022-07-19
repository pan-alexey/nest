import { Injectable } from '@nestjs/common';
import { MetricsService } from '../metrics/metrics.service';

@Injectable()
export class HomeService {
  constructor(private metricsService: MetricsService) {}

  public async main(): Promise<string> {
    return 'ok';
  }
}
