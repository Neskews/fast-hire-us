import { Controller, Post, Body, Get } from '@nestjs/common';
import { assertIsBand } from './assertions/isBand.assert';
import { BandService } from './band.service';

@Controller('band')
export class BandController {
    constructor(
        private readonly bandService: BandService
    ) {}

    @Get("read")
    async read() {
        return await this.bandService.read();
    }

    @Post("create")
    async create(
        @Body() band: any
    ) {
        try {
            assertIsBand(band);
            await this.bandService.create(band);
        } catch (error) {
            return "something went wrong";
        }
    }
}
