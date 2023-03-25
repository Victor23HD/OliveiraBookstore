import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
{
    id: {type: String},
    Title: {type: String},
    Author: {type: String},
    Publisher: {type: String},
    NumberPages: {type: Number},
    RealeseDate: {type: String}
}
);

const books = mongoose.model('books', bookSchema);

export default books;