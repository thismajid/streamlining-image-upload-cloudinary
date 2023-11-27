import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './modules/app/app.module';
import { SwaggerInit } from './configs/swagger.config';
import { APP_PORT } from './configs/global.config';
import { CustomLoggerService } from './common/logger/custom-logger';

async function bootstrap() {
  const customLoggerService = new CustomLoggerService();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger(customLoggerService.createLoggerConfig),
  });
  SwaggerInit(app);
  await app.listen(APP_PORT);
}
bootstrap();
