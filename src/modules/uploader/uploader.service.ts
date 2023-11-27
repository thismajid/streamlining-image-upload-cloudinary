import { Injectable } from '@nestjs/common';

@Injectable()
export class UploaderService {
  async uploadFile(file): Promise<any> {
    // const fileExtension = this.getFileExtension(file.originalname);
    // const fileName = `${uuidv4()}.${fileExtension}`;
    // const params = {
    //   Bucket: this.aws_bucket,
    //   Key: fileName,
    //   Body: file.buffer,
    // };
    // const s3Response = await this.s3.upload(params).promise();
    // return {
    //   fieldname: file.fieldname,
    //   originalname: file.originalname,
    //   encoding: file.encoding,
    //   mimetype: file.mimetype,
    //   size: file.size,
    //   bucket: s3Response.Bucket,
    //   key: fileName,
    //   location: s3Response.Location,
    //   url: `${this.base_url}/v1/client/uploader/_/${s3Response.Bucket}/${fileName}`,
    // };
  }
}
