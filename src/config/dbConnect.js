import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGO_URL);

const database = mongoose.connection;

export default database;