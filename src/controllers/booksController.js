import books from "../models/Book.js";

class BookController {

    static listBooks = async (_, res) => {
        const book = await books.find()
        .populate('Author');
        res.status(200).json(book);
    }

    static registerBook = async(req, res) => {
        const book = new books(req.body);
        await book.save();
        res.status(200).send("Successfully created book!");   
    }

    static updateBook = async(req, res) => {
        const id = req.params.id;
        await books.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send("Successfully updated book!");
    }

    static deleteBook = async(req, res) => {
        const id = req.params.id;
        await books.findByIdAndDelete(id);
        res.status(200).send("Book successfully deleted!");
    }

    static findByPublisher =  async(req, res) => {
        const publisher = req.query.publisher;
        const book = await books.find({'Publisher': publisher});
        res.status(200).json(book);
    }
}


export default BookController;