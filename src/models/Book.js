import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
{
    id: {type: String},
    Title: {type: String, require: true},
    Author: {type: mongoose.Schema.Types.ObjectId, ref: 'author'},
    Publisher: {type: String, require: true},
    NumberPages: {type: Number, require: true},
    RealeseDate: {type: String, require: true}
},
{
    versionKey: false
});

const books = mongoose.model('books', bookSchema);

export default books;