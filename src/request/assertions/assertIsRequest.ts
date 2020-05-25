import { Request } from "../interfaces/request.interface";
import { InternalServerErrorException } from "@nestjs/common";

export function assertIsRequest(request: any): asserts request is Request {
    if (!request.email) throw new InternalServerErrorException("Request does not contain email");
    if (!request.priceMax) throw new InternalServerErrorException("Request does not contain max price");

    return request;
}
