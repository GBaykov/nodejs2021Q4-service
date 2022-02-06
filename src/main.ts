import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fmp from 'fastify-multipart';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   logger: ['log'],
  // });
  let app;
  
  if (USE_FASTIFY === 'true') {
    console.log('Application is running on Fastify');
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ logger: true }),
    );
    // app.register(fmp);
  } else {
    console.log('Application app is running on Express');
    app = await NestFactory.create(AppModule, {
      logger: ['log'],
    });
  }

  app.useGlobalPipes(  
    new ValidationPipe({
      // whitelist: true,
      // transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT,'0.0.0.0');
  console.log(`App is running on http://localhost:${PORT}`);
}
bootstrap();
