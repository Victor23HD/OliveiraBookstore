import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
{
    id: {type: String},
    Title: {type: String, require: true},
    Author: {type: String, require: true},
    Publisher: {type: String, require: true},
    NumberPages: {type: Number, require: true},
    RealeseDate: {type: String, require: true}
});



const books = mongoose.model('books', bookSchema);


export default books;