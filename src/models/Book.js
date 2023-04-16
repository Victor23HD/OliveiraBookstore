import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        Title: {
            type: String,
            required: [true, "The Title field is required!"],
        },
        Author: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "author",
            required: [true, "The Author field is required!"],
        },
        Publisher: {
            type: String,
            required: [true, "The Publisher field is required!"],
        },
        NumberPages: {
            type: Number, 
            required: [true, "The NumberPages field is required!"],
        },
        RealeseDate: {
            type: String,
            required: [true, "The RealeseDate field is required!"],
        },    
    },
    {
        versionKey: false
    });

const books = mongoose.model("books", bookSchema);

export default books;