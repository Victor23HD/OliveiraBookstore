import books from "../models/Book.js";

class BookController {

    static listBooks = async (req, res) => {
        res.status(200).json(await books.find());
    }

    static registerBook = async(req, res) => {
        let book = new books(req.body);
        let ret = await book.save();
        res.status(200).send("Livro criado com sucesso!");
        
    }
}

export default BookController;