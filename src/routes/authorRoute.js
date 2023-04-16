import Express from "express";
import authorControllers from "../controllers/authorsController.js";

const authorRouter = Express.Router();

authorRouter
    .get("/authors", authorControllers.listAuthor)
    .get("/authors/:id", authorControllers.listAuthorById)
    .post("/authors", authorControllers.registerAuthor)
    .put("/authors/:id", authorControllers.updateAuthor)
    .delete("/authors/:id", authorControllers.deleteAuthor);

export default authorRouter;