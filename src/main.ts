import { NestFactory } from '@nestjs/core';
import FastifyAdapter from './core/fastify.adapter';
import { AppModule } from './app.module';
import corsOptions from './core/cors.options';
import * as configs from './configs';
import { swaggerConfig } from './configs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

import { HomeModule } from './modules/home/home.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, FastifyAdapter);
  app.enableCors(corsOptions);

  SwaggerModule.setup(
    'docs', // swager absolute path
    app,
    SwaggerModule.createDocument(app, swaggerConfig, {
      include: [HomeModule],
    }),
  );

  await app.listen(configs.PORT, '0.0.0.0');
  // console.log(`http://localhost:${configs.PORT}`);
}
bootstrap();
