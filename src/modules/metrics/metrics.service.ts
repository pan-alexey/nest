import { Injectable } from '@nestjs/common';
import { PrometheusService } from '../prometeus/prometheus.service';

@Injectable()
export class MetricsService {
  constructor(private promClientService: PrometheusService) {}

  public get metrics(): Promise<string> {
    return this.promClientService.metrics;
  }

  public socketConnection() {
    this.promClientService.Gauge('ws_clients', 'web socket clients').inc();
  }

  public socketDisconnect() {
    this.promClientService.Gauge('ws_clients', 'web socket clients').dec();
  }

  public onRequest() {
    console.log('response code');
  }
}
