import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { assertIsBand } from './assertions/isBand.assert';
import { BandService } from './band.service';
import { Response } from 'express';

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
        @Body() band: any,
        @Res() response: Response,
    ) {
        try {
            assertIsBand(band);
            await this.bandService.create(band);

            await response.render("band/created");
        } catch (error) {
            return "something went wrong";
        }
    }
}
