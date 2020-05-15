import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Model } from "mongoose";
import { Band } from './interfaces/band.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Urified } from 'src/interfaces/Urified.interface';
import { v4 } from "uuid";
import { AuthService } from 'src/auth/auth.service';
import { AssignmentService } from 'src/assignment/assignment.service';

@Injectable()
export class BandService implements Urified {
    constructor(
        @Inject(forwardRef(() => AssignmentService)) private readonly assignmentService: AssignmentService,
        @InjectModel("Band") private bandModel: Model<Band>,
        private readonly authService: AuthService,
    ) {}

    async read() {
        return await this.bandModel.find();
    }

    async findAssignments(band: Band) {
        const { uri } = await this.findOne(band);
        return await this.assignmentService.findByBandUri({ uri });
    }

    async create(band: Band) {
        const existantBand = await this.bandModel.findOne({ email: band.email });

        if (existantBand) return existantBand; 

        const createdBand = new this.bandModel({ ...band, uri: this.getUri() });
        await this.authService.register(band);

        return createdBand.save();
    }

    async findOne({ email }) {
        return await this.bandModel.findOne({ email });
    }

    getUri() {
        return `org.hireus:band:${v4()}`;
    }
}