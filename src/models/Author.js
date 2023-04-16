import mongoose from "mongoose";

const author = new mongoose.Schema(
    {
        Id: {type: String},
        Name: {
            type: String,
            required: [true, "The Name field is required!"]
        },
        Nationality: {
            type: String,
            required: [true, "The Nationality field is required!"]
        }
    },
    {
        versionKey: false,
    });

const authors = mongoose.model("author", author);

export default authors;