import {
  MONGO_DATABSE,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
  NODE_ENV,
} from './global.config';

export function getMongoURL() {
  const connection =
    NODE_ENV == 'development'
      ? `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABSE}`
      : `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PASSWORD}/${MONGO_DATABSE}`;
  return connection;
}
