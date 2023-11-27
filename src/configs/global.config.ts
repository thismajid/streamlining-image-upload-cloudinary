import { config } from 'dotenv';

config();
export const {
  APP_PORT,
  NODE_ENV,
  SWAGGER_USERNAME,
  SWAGGER_PASSWORD,
  MONGO_DATABSE,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
} = process.env;
