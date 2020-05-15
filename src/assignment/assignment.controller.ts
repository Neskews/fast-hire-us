import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { assertIsBandUri } from './assertions/isBandUri.assertion';

@Controller('assignment')
export class AssignmentController {
    constructor(
        private readonly assignmentService: AssignmentService,
    ) {}

    @Get()
    async assign() {
        try {
            await this.assignmentService.assign();
        } catch (error) {
            console.log("Error while assignment:", error);
        }
    }

    @Get("read")
    async read() {
        try {
            return await this.assignmentService.read();
        } catch (error) {
            return error;
        }
    }

    @Post("band")
    async getAssignmentByBand(
        @Body() bandUri: any,
    ) {
        assertIsBandUri(bandUri);
        return await this.assignmentService.findByBandUri(bandUri);
    }
}
