import { Injectable, CanActivate, Inject, ExecutionContext, UnprocessableEntityException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class RequestGuard implements CanActivate {
    constructor(
        @Inject("AuthService") private readonly authService: AuthService
    ) {}
    async canActivate(context: ExecutionContext) {
        const { body }: Request = context.switchToHttp().getRequest();

        if (!body || !body.email) throw new UnprocessableEntityException();

        const auth = await this.authService.findOne(body);
        
        return !!auth;
    }
}