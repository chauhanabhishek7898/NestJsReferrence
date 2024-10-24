import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from './station.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
