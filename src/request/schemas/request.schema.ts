import * as mongoose from "mongoose";

export const RequestSchema = new mongoose.Schema({
    priceMin: String,
    priceMax: String,
    email: String,
    uri: String,
});