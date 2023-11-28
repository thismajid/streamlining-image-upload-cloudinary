import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Queue } from 'bull';
import { v2 as cloudinary } from 'cloudinary';
import { Model } from 'mongoose';
import { IQueueObject } from 'src/common/interfaces/queue-object.interface';
import { UploadImages } from 'src/common/schemas/uploadImages.schema';
import { QUEUE_NAME } from 'src/configs/global.config';

@Injectable()
export class UploaderService {
  constructor(
    @InjectQueue(QUEUE_NAME) readonly bullQueue: Queue,
    @InjectModel(UploadImages.name)
    private uploadImagesModel: Model<UploadImages>,
  ) {}

  async uploadFile({ file, filename, width, height }): Promise<void> {
    const newObject = await this.uploadImagesModel.create({
      filename,
      width,
      height,
    });
    const data: IQueueObject = {
      objectId: newObject._id,
      imagePath: file.path,
      width,
      height,
    };
    this.bullQueue.add('upload', data);
  }

  async uploadOnCloudinary(data: IQueueObject): Promise<void> {
    const result = await cloudinary.uploader.upload(data.imagePath, {
      width: data.width,
      height: data.height,
    });
    await this.uploadImagesModel.findByIdAndUpdate(data.objectId, {
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  }
}
