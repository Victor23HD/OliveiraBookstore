import Express from "express";
import database from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

database.on('error', console.log.bind(console, 'Error na conexão!'));
database.once('open', () => {
    console.log("Conexão feita com sucesso!");
});

const app = Express();

app.use(Express.json());

routes(app);

app.delete('/books/:id', (req, res) => {
    let i = findBook(req.params.id);
    books.splice(i, 1);
    res.status(200).send(`Livro ${i + 1} excluido com sucesso!`);
})



export default app;