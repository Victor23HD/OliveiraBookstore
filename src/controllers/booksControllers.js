import books from "../models/Book.js";

class BookController
{
    static listBooks = async(req, res) => 
    {
        res.status(200).json(await books.find());
    }


    //VOCÊ PAROU AQUIIIII
    static registerBook = (req, res) => 
    {
        let aux = req.params.id;
        let i = books.find(aux);
        console.log(i);
        res.status(200).json(books[i]);
    }
}

export default BookController;