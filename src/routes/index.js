import Express from "express";
import bookRouter from "./bookRoutes.js";

const routes =  (app) =>
{
    app.route('/').get((req, res) => {
        res.status(200).send("Livraria Oliveira!");
    });

    app.use(
        Express.json(),
        bookRouter
    );
}

export default routes;