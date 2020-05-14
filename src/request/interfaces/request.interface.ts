import { Document } from "mongoose";
import { Uri } from "src/interfaces/uri.interface";

export interface Request extends Document, Uri {
    priceMin: number,
    priceMax: number,
    email: string,
}