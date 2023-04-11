import books from "../models/Book.js";

const booksController = 
{

    // http://localhost:3000/books - GET
    listBooks: async (_, res) => 
    {
        try 
        {
            const book = await books.find().populate("Author");
            
            return res.status(200).json(book);
        } 
        catch (err)
        {
            return res.status(500).json({ Message: `there was an internal error on the server\nERROR:${err}`});
        }
    },

    // http://localhost:3000/books/find?publisher=publisherName - GET
    findByPublisher: async (req, res) => 
    {
        try
        {
            const book = await books.find({ "Publisher": req.query.publisher }).populate("Author");

            if(book != "")
            {
                return res.status(200).json(book);
            }
            else
            { 
                return res.status(500).json({ Message: "Publisher not found!"});
            }
        }
        catch (err)
        {
            return res.status(500).json({ Message: "there was an internal error on the server", Error: `${err}`});
        }
    },

    // http://localhost:3000/books - POST
    registerBook: async (req, res) => 
    {
        try
        {
            const book = new books(req.body);
            await book.save();

            return res.status(200).send("Successfully created book!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: "there was an internal error on the server", Error: `${err}`});
        }
        
    },

    // http://localhost:3000/books/:id - PUT
    updateBook: async (req, res) => 
    {
        try
        {
            const id = req.params.id;
            await books.findByIdAndUpdate(id, { $set: req.body });

            return res.status(200).send("Successfully updated book!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: `Failed to update the book / ${req.params.id}`, Error: `${err}`});
        }        
    },

    //	http://localhost:3000/books/:id - DELETE
    deleteBook: async (req, res) => 
    {
        try
        {
            const id = req.params.id;
            await books.findByIdAndDelete(id);

            return res.status(200).send("Book successfully deleted!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: `Failed to delete the book / ${req.params.id}`, Error: `${err}`});
        }
        
    }
};

export default booksController;