import Express from "express";
import authorRouter from "./authorRoute.js";
import bookRouter from "./bookRoute.js";


const routes =  (app) =>
{
    app.route('/').get((req, res) => {
        res.status(200).send("Livraria Oliveira!");
    });

    app.use(
        Express.json(),
        bookRouter,
        authorRouter
    );
}

export default routes;