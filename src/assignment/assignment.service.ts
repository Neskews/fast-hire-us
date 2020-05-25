import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { BandService } from 'src/band/band.service';
import { RequestService } from 'src/request/request.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment } from './interfaces/assignment.interface';
import { BandUri } from "./interfaces/uri.interface";

@Injectable()
export class AssignmentService {
    constructor(
        @Inject(forwardRef(() => BandService)) private readonly bandService: BandService,
        private readonly requestService: RequestService,
        @InjectModel("Assignment") private assignmentModel: Model<Assignment>
    ) { }

    async assign() {
        const bands = await this.bandService.read();
        const requests = await this.requestService.read();

        bands.forEach(async band => {
            requests.forEach(async request => {
                const assignment = { 
                    band: band.uri,
                    request: request.uri
                };
                
                if (!(await this.isExistant(assignment))) {
                    const createdAssignment = await this.assignmentModel.create(assignment);
                    await createdAssignment.save();
                }
            });
        });
    }

    async findByBandUri(bandUri: BandUri) {
        return await this.assignmentModel.find({ band: bandUri.uri });
    }

    async isExistant(assignment) {
        return !!(await this.assignmentModel.findOne(assignment));
    }

    async read() {
        return await this.assignmentModel.find();
    }

    async findByEmail(email: string) {
        const requests = await this.requestService.findByEmail(email);

        return await Promise.all(
            requests.filter(async ({ uri: request }) => {
                return await this.assignmentModel.find({ request });
            })
        );
    }
}
