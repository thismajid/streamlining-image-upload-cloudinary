import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  image: {
    url: {
      type: String;
      required: false;
    };
    public_id: {
      type: String;
      required: false;
    };
  };
}

export const CatSchema = SchemaFactory.createForClass(User);
