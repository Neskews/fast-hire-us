import { Controller, Post, Body, Get, Res, UseGuards, Render } from '@nestjs/common';
import { assertIsBand } from './assertions/isBand.assert';
import { BandService } from './band.service';
import { Response } from 'express';
import { BandGuard } from './guards/band.guard';

@Controller('band')
export class BandController {
    constructor(
        private readonly bandService: BandService
    ) {}

    @Get()
    @Render("band-landing-page")
    async band() {}

    @Post("dashboard")
    @UseGuards(BandGuard)
    async dashboard(
        @Body() band: any,
        @Res() response: Response,
    ) {
        assertIsBand(band);
        const assignments = await this.bandService.findAssignments(band);
        await this.bandService.findOne(band);

        response.render("band/dashboard", { assignments });
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
