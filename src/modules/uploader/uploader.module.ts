import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { BullModule } from '@nestjs/bullmq';
import { MongooseModule } from '@nestjs/mongoose';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import { ImageUploadProcessor } from 'src/bullMQ/image-upload.processor';
import { ImageUploadEventsListener } from 'src/bullMQ/image-upload.eventsListener';
import { QUEUE_NAME, REDIS_HOST, REDIS_PORT } from 'src/configs/global.config';
import { CloudinaryProvider } from './cloudinary.provider';
import {
  UploadImages,
  UploadImagesSchema,
} from 'src/common/schemas/uploadImages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UploadImages.name, schema: UploadImagesSchema },
    ]),
    BullModule.registerQueue({
      name: QUEUE_NAME,
      connection: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
      },
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    UploaderModule,
  ],
  controllers: [UploaderController],
  providers: [
    UploaderService,
    ImageUploadProcessor,
    ImageUploadEventsListener,
    CloudinaryProvider,
  ],
  exports: [UploaderService, CloudinaryProvider],
})
export class UploaderModule {}
