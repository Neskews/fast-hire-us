import { Controller, Post, Body, Get } from '@nestjs/common';
import { RequestService } from './request.service';
import { assertIsRequest } from './assertions/assertIsRequest';

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
        @Body() request: any 
    ) {
        try {
            assertIsRequest(request);
            await this.requestService.create(request)
        } catch (error) {
            return "something went wrong";
        }
    }
}
