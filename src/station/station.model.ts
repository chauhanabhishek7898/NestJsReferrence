import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Station extends Document {

    @Prop() stationName: string;
    @Prop() stationCode: string;
}

// Other properties related to Station data


export const StationSchema = SchemaFactory.createForClass(Station);