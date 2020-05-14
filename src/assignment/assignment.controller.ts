import { Controller, Get } from '@nestjs/common';
import { AssignmentService } from './assignment.service';

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
}
