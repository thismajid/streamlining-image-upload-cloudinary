import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UploadImagesDocument = HydratedDocument<UploadImages>;

@Schema()
export class UploadImages {
  @Prop()
  filename: string;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop({
    type: {
      url: { type: String },
      public_id: { type: String },
    },
  })
  image: {
    url: string;
    public_id: string;
  };
}

export const UploadImagesSchema = SchemaFactory.createForClass(UploadImages);
