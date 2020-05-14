import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Band } from './interfaces/band.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'src/request/interfaces/request.interface';
import { Urified } from 'src/interfaces/Urified.interface';
import { v4 } from "uuid";

@Injectable()
export class BandService implements Urified {
    constructor(
        @InjectModel("Band") private bandModel: Model<Band>,
    ) {}

    async read() {
        return await this.bandModel.find();
    }

    async create(band: Band) {
        const createdBand = new this.bandModel({ ...band, uri: this.getUri() });

        return createdBand.save();
    }

    getUri() {
        return `org.hireus:band:${v4()}`;
    }
}
