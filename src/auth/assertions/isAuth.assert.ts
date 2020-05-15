import { UnprocessableEntityException } from "@nestjs/common";
import { Auth } from "../interfaces/auth.interface";

export function assertIsAuth(auth: any): asserts auth is Auth {
    if (!auth) throw new UnprocessableEntityException("Not auth provided");

    if (!auth.email)
        throw new UnprocessableEntityException("Auth does not contain an email address");
}