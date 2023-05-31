import mongoose from "mongoose";

export const connectMongoose = async () => mongoose.connect(process.env.MONGO_URI!);