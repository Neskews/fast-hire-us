import * as mongoose from "mongoose";

export const BandSchema = new mongoose.Schema({
    email: String,
    uri: String,
});