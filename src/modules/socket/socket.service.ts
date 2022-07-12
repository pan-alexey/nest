import { Injectable } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';

@Injectable()
export class SocketService {
  constructor(private readonly socketGateway: SocketGateway) {}

  public emitAll(eventName: string, message: string) {
    this.socketGateway.emitAll(eventName, JSON.parse(message));
  }
}
