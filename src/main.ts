import { NestFactory } from '@nestjs/core';
import FastifyAdapter from './core/fastify.adapter';
import { AppModule } from './app.module';
import corsOptions from './core/cors.options';
import * as configs from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, FastifyAdapter);
  app.enableCors(corsOptions);

  await app.listen(configs.PORT, '0.0.0.0');
  console.log(`http://localhost:${configs.PORT}`);
}
bootstrap();
