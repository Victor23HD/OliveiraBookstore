import Express from "express";
import BookController from "../controllers/booksControllers.js";

const bookRouter = Express.Router();

bookRouter
    .get('/books', BookController.listBooks)
    .post('/books', BookController.registerBook);

export default bookRouter;