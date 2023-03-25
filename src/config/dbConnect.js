import mongoose from "mongoose";

mongoose.connect("mongodb+srv://OliveiraBookstore:12345@oliveirabookstore.qfwi63d.mongodb.net/oliveirabookstore-node");

let database = mongoose.connection;

export default database;