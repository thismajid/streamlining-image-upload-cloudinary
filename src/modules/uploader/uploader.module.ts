import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import { ImageUploadProcessor } from 'src/bullMQ/image-upload.processor';
import { ImageUploadEventsListener } from 'src/bullMQ/image-upload.eventsListener';
import { QUEUE_NAME, REDIS_HOST, REDIS_PORT } from 'src/configs/global.config';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUEUE_NAME,
      connection: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
      },
    }),
    UploaderModule,
  ],
  controllers: [UploaderController],
  providers: [UploaderService, ImageUploadProcessor, ImageUploadEventsListener],
  exports: [UploaderService],
})
export class UploaderModule {}
