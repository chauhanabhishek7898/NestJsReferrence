import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StationModule } from './station/station.module';

@Module({
 
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/DemoIRCTC'),
    StationModule, // Replace with your MongoDB URL
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
