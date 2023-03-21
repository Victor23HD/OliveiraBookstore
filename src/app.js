import Express  from "express";

const app = Express();

const books = [
    {id: 1, "title": "Lord of the Rings"},
    {id: 2, "title": "The Hobbit"}
]

app.get('/',(req,res) => {
    res.status(200).send("Curso de NodeJs");
});

app.get('/books',(req, res) => {
    res.status(200).json(books);
});

export default app;