import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel("Auth") private authModel: Model<Auth>
    ) {}

    async register(auth: Auth) {
        const existantAuth = await this.authModel.find(auth);

        if (existantAuth.length > 0) throw new HttpException("This email is already in use", HttpStatus.CONFLICT);

        const createdAuth = new this.authModel(auth);

        return createdAuth.save();
    }

    async findOne(auth: Auth) {
        return await this.authModel.findOne(auth);
    }
}
