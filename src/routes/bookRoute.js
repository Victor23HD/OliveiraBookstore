import Express from "express";
import BookController from "../controllers/booksController.js";

const bookRouter = Express.Router();

bookRouter
    .get('/books', BookController.listBooks)
    .post('/books', BookController.registerBook)
    .put('/books/:id',BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook);

export default bookRouter;