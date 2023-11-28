import { config } from 'dotenv';

config();
export const {
  APP_PORT,
  NODE_ENV,
  SWAGGER_USERNAME,
  SWAGGER_PASSWORD,
  MONGO_DATABASE,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
  QUEUE_NAME,
  REDIS_HOST,
  REDIS_PORT,
} = process.env;
