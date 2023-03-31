import books from "../models/Book.js";

class BookController {

    static listBooks = async (_, res) => {
        let book = await books.find()
        .populate('Author');
        res.status(200).json(book);
    }

    static registerBook = async(req, res) => {
        let book = new books(req.body);
        await book.save();
        res.status(200).send("Successfully created book!");   
    }

    static updateBook = async(req, res) => {
        let id = req.params.id;
        await books.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send("Successfully updated book!");
    }

    static deleteBook= async(req, res) => {
        const id = req.params.id;
        await books.findByIdAndDelete(id);
        res.status(200).send("Book successfully deleted!");
    }
}


export default BookController;