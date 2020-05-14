import { Document } from "mongoose";
import { Uri } from "src/interfaces/uri.interface";

export interface Assignment extends Document, Uri {
    band: string,
    request: string,
}