import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MetricsService } from '../metrics/metrics.service';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SocketGateway {
  @WebSocketServer()
  public server: Server;

  constructor(private metricsService: MetricsService) {}

  public emitAll(event: string, message: Record<string, any>): void {
    this.server.emit(event, message);
  }

  private handleConnection() {
    this.metricsService.socketConnection();
    // this.promClientService.Gauge('ws_clients', 'web socket clients').inc();
  }

  private handleDisconnect() {
    this.metricsService.socketDisconnect();
    // this.promClientService.Gauge('ws_clients', 'web socket clients').dec();
  }
}
