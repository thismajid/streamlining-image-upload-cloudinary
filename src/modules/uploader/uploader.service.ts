import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { v2 as cloudinary } from 'cloudinary';
import { QUEUE_NAME } from 'src/configs/global.config';

@Injectable()
export class UploaderService {
  constructor(@InjectQueue(QUEUE_NAME) readonly bullQueue: Queue) {}

  async uploadFile({ file, filename, width, height }): Promise<any> {
    this.bullQueue.add('upload', file);
  }

  async uploadOnCloudinary(file: Express.Multer.File): Promise<any> {
    const result = await cloudinary.uploader.upload(file.path);
    console.log(result);
  }
}
