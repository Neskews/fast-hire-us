import * as mongoose from "mongoose";

export const AssignmentSchema = new mongoose.Schema({
    band: String,
    request: String,
});