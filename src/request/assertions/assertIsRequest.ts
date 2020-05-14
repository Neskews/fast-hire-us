import { Request } from "../interfaces/request.interface";
import { InternalServerErrorException } from "@nestjs/common";

export function assertIsRequest(request: any): asserts request is Request {
    console.log(request);
    
    if (!request.email) throw new InternalServerErrorException("Request does not contain email");
    if (!request.priceMin) throw new InternalServerErrorException("Request does not contain min price");
    if (!request.priceMax) throw new InternalServerErrorException("Request does not contain max price");

    return request;
}
