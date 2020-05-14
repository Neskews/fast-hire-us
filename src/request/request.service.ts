import { Injectable, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Request } from "./interfaces/request.interface";
import { v4 } from "uuid";
import { Urified } from 'src/interfaces/Urified.interface';

@Injectable()
export class RequestService implements Urified {
    constructor(
        @InjectModel("Request") private requestmodel: Model<Request>
    ) {
        
    }

    async read() {
        return await this.requestmodel.find();
    }

    async create(requestDto: Request): Promise<Request> {
        const existantRequest = await this.requestmodel.findOne({ email: requestDto.email });

        if (existantRequest) return existantRequest;
        
        const createdRequest = new this.requestmodel({ ...requestDto, uri: this.getUri() });

        return createdRequest.save();
    }

    getUri() {
        return `org.hireus:request:${v4()}`;
    }
}
