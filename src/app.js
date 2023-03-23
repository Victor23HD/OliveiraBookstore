import Express from "express";

const app = Express();

app.use(Express.json());

const books = 
[
    {id: 1, "title": "Lord of the Rings"},
    {id: 2, "title": "The Hobbit"}
]

app.get('/',(req,res) => {
    res.status(200).send("Curso de NodeJs");
});

app.get('/books',(req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req,res) => {
    let i = findBook(req.params.id);
    res.status(200).json(books[i]);
});

app.post('/books', (req,res) => {
    books.push(req.body);
    res.status(201).send("O livro foi cadastrado com sucesso!");
});

app.put('/books/:id', (req,res) => {
    let i = findBook(req.params.id);
    books[i].title = req.body.title;
    res.status(200).json(books);
});

const findBook = (id) => 
{
    return books.findIndex(book => book.id == id);
}

export default app;