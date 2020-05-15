import { Controller, Post, Body, Get, Res, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { assertIsRequest } from './assertions/assertIsRequest';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { RequestGuard } from './guards/requestGuard';

@Controller('request')
export class RequestController {
    constructor(
        private readonly requestService: RequestService,
        private readonly authService: AuthService
    ) {}

    @Get("read")
    async read(
    ) {
        return await this.requestService.read();
    }

    @Post("dashboard")
    @UseGuards(RequestGuard)
    async dashboard(
        @Res() response: Response
    ) {
        response.render("request/dashboard");
    }

    @Post("create")
    async create(
        @Body() request: any,
        @Res() response: Response
    ) {
        try {
            assertIsRequest(request);
            await this.requestService.create(request);
            await this.authService.register(request);

            await response.render("request/created", { request });
        } catch (error) {
            return "something went wrong";
        }
    }
}
