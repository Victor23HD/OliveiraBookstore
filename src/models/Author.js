import mongoose from "mongoose";

const author = new mongoose.Schema(
    {
        Name: {
            type: String,
            minLength: [5, "Name: minimum length of 5 characters"],
            maxLength: [30, "Name: maximum length of 30 characters"],
            required: [true, "The Name field is required!"]
        },
        Nationality: {
            type: String,
            minLength: [5, "Nationality: minimum length of 5 characters"],
            maxLength: [15, "Nationality: maximum length of 30 characters"],
            required: [true, "The Nationality field is required!"],   
        }
    },
    {
        versionKey: false,
    });

const authors = mongoose.model("author", author);

export default authors;