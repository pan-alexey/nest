import { Module } from '@nestjs/common';
import { SocketModule } from './modules/socket/socket.module';
import { HomeModule } from './modules/home/home.module';
import { MetricsModule } from './modules/metrics/metrics.module';

import { HttpExceptionFilter } from './app/httpError.filter';
import { HttpErrorInterceptor } from './app/httpError.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [SocketModule, HomeModule, MetricsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpErrorInterceptor,
    },
  ],
})
export class AppModule {}
