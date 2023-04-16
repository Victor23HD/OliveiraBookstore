import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            minLength: [10, "Title: minimum length of 10 characters"],
            maxLength: [50, "Title: maximum length of 35 characters"],
            required: [true, "The Title field is required!"],
        },
        Author: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "author",
            required: [true, "The Author field is required!"],
        },
        Publisher: {
            type: String,
            minLength: [10, "Publisher: minimum length of 10 characters"],
            maxLength: [20, "Publisher: maximum length of 20 characters"],
            required: [true, "The Publisher field is required!"],
        },
        NumberPages: {
            type: Number,
            min: [10, "NumberPages: minimum of pages 10!"],
            max: [5000, "NumberPages: maximum of pages 5000!"], 
            required: [true, "The NumberPages field is required!"],
        },
        RealeseDate: {
            type: String,
            minLength: [10,"RealeseDate: minimum length of 10 characters"],
            maxLength: [20, "RealeseDate: maximum length of 20 characters"],
            required: [true, "The RealeseDate field is required!"],
        },    
    },
    {
        versionKey: false
    });

const books = mongoose.model("books", bookSchema);

export default books;