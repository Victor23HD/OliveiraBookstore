import Express from "express";
import booksController from "../controllers/booksController.js";

const bookRouter = Express.Router();

bookRouter
    .get('/books', booksController.listBooks)
    .get('/books/find', booksController.findByPublisher)
    .post('/books', booksController.registerBook)
    .put('/books/:id', booksController.updateBook)
    .delete('/books/:id', booksController.deleteBook);

export default bookRouter;