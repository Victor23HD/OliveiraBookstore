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

/*app.get('/books/:id', (req, res) => {
    let i = findBook(req.params.id);
    res.status(200).json(books[i]);
});*/

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send("O livro foi cadastrado com sucesso!");
});

app.put('/books/:id', (req, res) => {
    let i = findBook(req.params.id);
    books[i].title = req.body.title;
    res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
    let i = findBook(req.params.id);
    books.splice(i, 1);
    res.status(200).send(`Livro ${i + 1} excluido com sucesso!`);
})

const findBook = (id) => {
    return books.findIndex(book => book.id == id);
}

export default app;