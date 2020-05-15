import { Injectable, CanActivate, ExecutionContext, Inject, UnprocessableEntityException } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class BandGuard implements CanActivate {
    constructor(
        @Inject("AuthService") private readonly authService: AuthService
    ) {}

    async canActivate(context: ExecutionContext) {
        const { body } = context.switchToHttp().getRequest();

        if (!body || !body.email) throw new UnprocessableEntityException();

        const auth = await this.authService.findOne(body);

        return !!auth;
    }
}