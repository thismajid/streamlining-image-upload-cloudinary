export interface IUser extends Document {
  name: string;
  image?: {
    url?: string;
    public_id?: string;
  };
}
