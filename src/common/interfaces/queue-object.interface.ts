import { ObjectId } from 'mongodb';

export interface IQueueObject {
  objectId: ObjectId;
  imagePath: string;
  width: number;
  height: number;
}
