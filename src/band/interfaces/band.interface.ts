import { Document } from "mongoose";
import { Uri } from "src/interfaces/uri.interface";

export interface Band extends Document, Uri {
    email: string
}