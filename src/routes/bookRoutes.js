import Express from "express";
import BookController from "../controllers/booksControllers.js";

const bookRouter = Express.Router();

bookRouter
    .get('/books', BookController.listBooks)
    .get('/books/:id', BookController.registerBook);

export default bookRouter;