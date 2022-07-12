import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';
import { MetricsModule } from '../metrics/metrics.module';

@Module({
  providers: [SocketService, SocketGateway],
  exports: [SocketService, SocketGateway],
  imports: [MetricsModule],
})
export class SocketModule {}
