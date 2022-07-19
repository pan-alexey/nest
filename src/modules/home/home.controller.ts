import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HomeService } from './home.service';
import { MetricsInterceptor } from '~/common/metrics.interceptor';

@UseInterceptors(MetricsInterceptor) // track interceptor
@Controller('/')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  @Get('home')
  public main(): Promise<string> {
    return this.homeService.main();
  }

  @Get('err')
  public FORBIDDEN(): Promise<string> {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('404')
  public NOT_FOUND(): Promise<string> {
    throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
  }
}
