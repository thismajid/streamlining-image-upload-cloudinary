import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { QUEUE_NAME } from 'src/configs/global.config';
import { UploaderService } from 'src/modules/uploader/uploader.service';

@Processor(QUEUE_NAME)
export class ImageUploadProcessor extends WorkerHost {
  constructor(private uploaderService: UploaderService) {
    super();
  }

  async process(job: Job<any>): Promise<any> {
    await this.uploaderService.uploadOnCloudinary({ ...job });
  }
}
