import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MetricsService } from '~/modules/metrics/metrics.service';

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private metricsService: MetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const userAgent = context.switchToHttp().getRequest().headers['user-agent'];
    const request = context.switchToHttp().getRequest();
    const controllerName = context.getClass().name;
    const сontrollerMethod = context.getClass();
    return next.handle().pipe(
      tap((data) => {
        // send metrics
      }),
    );
  }
}
