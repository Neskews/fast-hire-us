import { Controller, Post, Body, Get, Res, UseGuards, Render } from '@nestjs/common';
import { RequestService } from './request.service';
import { assertIsRequest } from './assertions/assertIsRequest';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { RequestGuard } from './guards/requestGuard';
import { AssignmentService } from 'src/assignment/assignment.service';

@Controller('request')
export class RequestController {
    constructor(
        private readonly requestService: RequestService,
        private readonly authService: AuthService,
        private readonly assignmentService: AssignmentService,
    ) {}

    @Get("read")
    async read(
    ) {
        return await this.requestService.read();
    }

    @Get("login")
    @Render("request/login")
    async login() {

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
            await this.assignmentService.assign();

            const assignments = await this.assignmentService.findByEmail(request.email);

            console.log(assignments);
            
            await response.render("request/created", { request, assignments });
        } catch (error) {
            return "something went wrong";
        }
    }
}
