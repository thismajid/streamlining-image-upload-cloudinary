import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoURL } from 'src/configs/mongo.config';
import { BullModule } from '@nestjs/bullmq';
import { QUEUE_NAME, REDIS_HOST, REDIS_PORT } from 'src/configs/global.config';
import { ImageUploadProcessor } from 'src/bullMQ/image-upload.processor';
import { ImageUploadEventsListener } from 'src/bullMQ/image-upload.eventsListener';
import { UploaderModule } from '../uploader/uploader.module';

@Module({
  imports: [
    MongooseModule.forRoot(getMongoURL(), {
      connectionFactory: (connection: Connection) => {
        if (connection.readyState === 1) {
          Logger.log('MongoDB connected');
        }

        connection.on('disconnected', () => {
          Logger.log('MongoDB disconnected');
        });

        return connection;
      },
    }),
    BullModule.registerQueue({
      name: QUEUE_NAME,
      connection: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
      },
    }),
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService, ImageUploadProcessor, ImageUploadEventsListener],
})
export class AppModule {}
