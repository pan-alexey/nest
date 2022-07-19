import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      catchError((err) => {
        // console.log('error inteceptor'); // send error in inteceptor to metrics
        throw {
          ...err,
          controllerName: context.getClass().name,
          handlerName: context.getHandler().name,
          duaration: Date.now() - now,
        };
      }),
    );
  }
}
