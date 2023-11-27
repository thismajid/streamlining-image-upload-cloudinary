import { config } from 'dotenv';

config();
export const { APP_PORT, NODE_ENV, SWAGGER_USERNAME, SWAGGER_PASSWORD } =
  process.env;
