import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fmp from 'fastify-multipart';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap() {
    let app;
  //  app = await NestFactory.create(AppModule, {
  //   logger: ['log'],
  // });

  console.log("USE_FASTIFY", USE_FASTIFY)
  if (USE_FASTIFY === 'true') {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ logger: true }),
    );
    // app.register(fmp);
  } else {

    app = await NestFactory.create(AppModule, {
      logger: ['log'],
    });
  }

  app.useGlobalPipes(  
    new ValidationPipe({
      // whitelist: true,
      // transform: true,
      //forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT,'0.0.0.0');
  console.log(`App is running on http://localhost:${PORT}`);
}
bootstrap();
