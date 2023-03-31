import Express from "express";
import authorControllers from "../controllers/authorsController.js";

const authorRouter = Express.Router();

authorRouter
    .get('/authors', authorControllers.listAuthor)
    .post('/authors', authorControllers.registerAuthor)
    .put('/authors/:id', authorControllers.updateAuthor)
    .delete('/authors/:id', authorControllers.updateAuthor);

export default authorRouter;