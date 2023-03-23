import Express  from "express";

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
app.post('/books', (req,res) => {
    books.push(req.body);
    res.status(201).send("O livro foi cadastrado com sucesso!");
});

export default app;