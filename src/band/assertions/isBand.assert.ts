import { Band } from "../interfaces/band.interface";
import { InternalServerErrorException } from "@nestjs/common";

export function assertIsBand(band: any): asserts band is Band {
    if (!band.email) throw new InternalServerErrorException();

    return band;
} 