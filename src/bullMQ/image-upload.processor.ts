import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { QUEUE_NAME } from 'src/configs/global.config';

@Processor(QUEUE_NAME)
export class ImageUploadProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<any> {}
}
