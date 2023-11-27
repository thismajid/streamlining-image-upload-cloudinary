import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app/app.module';
import { SwaggerInit } from './configs/swagger.config';
import { APP_PORT } from './configs/global.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  SwaggerInit(app);
  await app.listen(APP_PORT);
}
bootstrap();
