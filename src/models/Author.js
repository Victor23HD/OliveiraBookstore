import mongoose from "mongoose";

const author = new mongoose.Schema(
    {
        Id: {type: String},
        Name: {type: String, required: true},
        Nationality: {type: String, required: true}
    },
    {
        versionKey: false,
    });

const authors = mongoose.model("author", author);

export default authors;