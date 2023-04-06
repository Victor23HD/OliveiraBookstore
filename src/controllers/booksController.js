import books from "../models/Book.js";

const booksController = {

    listBooks: async(_, res) => {
        const book = await books.find().populate('Author');
        res.status(200).json(book);
    },

    findByPublisher: async(req, res) => {
        const book = await books.find({ 'Publisher': req.query.publisher })
        .populate('Author');
        res.status(200).json(book);
    },
    
    registerBook: async(req, res) => {
        const book = new books(req.body);
        await book.save();
        res.status(200).send("Successfully created book!");
    },

    updateBook: async(req, res) => {
        const id = req.params.id;
        await books.findByIdAndUpdate(id, { $set: req.body });
        res.status(200).send("Successfully updated book!");
    },

    deleteBook: async(req, res) => {
        const id = req.params.id;
        await books.findByIdAndDelete(id);
        res.status(200).send("Book successfully deleted!");
    }
}

export default booksController;