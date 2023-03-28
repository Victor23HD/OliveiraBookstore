import Express from "express";
import bookRouter from "./bookRoute.js";

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