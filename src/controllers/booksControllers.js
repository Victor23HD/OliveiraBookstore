import chalk from "chalk";
import { query } from "express";
import books from "../models/Book.js";

class BookController {

    static listBooks = async (req, res) => {
        let book = await books.find();
        res.status(200).json(book);
    }

    static registerBook = async(req, res) => {
        let book = new books(req.body);
        await book.save();
        res.status(200).send("Livro criado com sucesso!");
        
    }

    static updateBook = async(req, res) => {
        let id = req.params.id;
        await books.findByIdAndUpdate(id, {$set: req.body});
        books
        res.status().send();
    }
}



export default BookController;