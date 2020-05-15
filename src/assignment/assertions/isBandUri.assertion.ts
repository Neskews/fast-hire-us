import { BandUri } from "../interfaces/uri.interface";
import { UnprocessableEntityException } from "@nestjs/common";

export function assertIsBandUri(body: any): asserts body is BandUri {
    if (!body.uri) throw new UnprocessableEntityException();
}