import mongoose from "mongoose";

const author = new mongoose.Schema(
    {
        Id: {type: String},
        Name: {type: String, require: true},
        Nationality: {type: String, require: true}
    },
    {
        versionKey: false,
    });

const authors = mongoose.model("author", author);

export default authors;