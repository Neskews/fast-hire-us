import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { RequestService } from './request.service';
import { assertIsRequest } from './assertions/assertIsRequest';
import { Response } from 'express';

@Controller('request')
export class RequestController {
    constructor(
        private readonly requestService: RequestService
    ) {}

    @Get("read")
    async read(
    ) {
        return await this.requestService.read();
    }

    @Post("create")
    async create(
        @Body() request: any,
        @Res() response: Response
    ) {
        try {
            assertIsRequest(request);
            await this.requestService.create(request);
            await response.render("request/created", { request });
        } catch (error) {
            return "something went wrong";
        }
    }
}
