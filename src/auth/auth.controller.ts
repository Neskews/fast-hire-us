import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { assertIsAuth } from './assertions/isAuth.assert';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post("register")
    async register(
        @Body() auth: any,
    ) {
        assertIsAuth(auth);
        return await this.authService.register(auth);
    }
}
