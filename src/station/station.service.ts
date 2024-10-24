import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './station.model';
import { Model } from 'mongoose';

@Injectable()
export class StationService {

  constructor(@InjectModel(Station.name) private readonly satisfactiontestModel: Model<Station>) { }

  create(createStationDto: CreateStationDto) {
    return 'This action adds a new station';
  }

  async findAll() {
    console.log(await this.satisfactiontestModel.find().exec());
    
    return await this.satisfactiontestModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
