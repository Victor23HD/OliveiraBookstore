/* eslint-disable no-unused-vars */
import Express from "express";
import authorRouter from "./authorRoute.js";
import bookRouter from "./bookRoute.js";


const routes =  (app) =>
{
    app.route("/").get((req, res) => {
        res.status(200).send("Livraria Oliveira!");
    });

    app.use(
        Express.json(),
        bookRouter,
        authorRouter,
        notFound
        
    ); 
};

const notFound = (req, res, next) =>
{
    return res.status(404).send({Message: "Page not found"});
};

export default routes;