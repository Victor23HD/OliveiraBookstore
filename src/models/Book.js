import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        Title: {type: String, required: true},
        Author: {type: mongoose.Schema.Types.ObjectId, ref: "author"},
        Publisher: {type: String, required: true},
        NumberPages: {type: Number, required: true},
        RealeseDate: {type: String, required: true}
    },
    {
        versionKey: false
    });

const books = mongoose.model("books", bookSchema);

export default books;