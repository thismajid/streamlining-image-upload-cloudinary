import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoURL } from 'src/configs/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(getMongoURL(), {
      connectionFactory: (connection: Connection) => {
        if (connection.readyState === 1) {
          Logger.log('MongoDB connected');
        }

        connection.on('disconnected', () => {
          Logger.log('MongoDB disconnected');
        });

        return connection;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
