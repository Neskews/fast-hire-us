import { Controller, Get, Render, Header, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
    @Get()
    @Render("landingpage")  
    async landingPage() {}
}
