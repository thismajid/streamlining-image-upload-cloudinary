import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { QUEUE_NAME } from 'src/configs/global.config';
import { Queue } from 'bull';

@Injectable()
export class UploaderService {
  constructor(@InjectQueue(QUEUE_NAME) readonly bullQueue: Queue) {}

  async uploadFile(file): Promise<any> {
    this.bullQueue.add('upload', file);
  }

  async uploadOnCloudinary({ data }) {}
}
