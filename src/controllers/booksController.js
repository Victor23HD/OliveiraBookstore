import books from "../models/Book.js";

const booksController = 
{

    // http://localhost:3000/books - GET
    listBooks: async (req, res, next) => 
    {
        try 
        {   

            let page = parseInt(req.query.page);
            const book = await books.find()
                .sort({ Title : 1 })
                .skip((page - 1) * 5)
                .limit(5)
                .populate("Author");
            
            if(book != null)
            {
                return res.status(200).json(book);
            }
            else
            {
                return res.status(200).send("No more books to be exhibited!");
            }
            
            
        } 
        catch (err)
        {
            return next(err);
        }
    },

    // http://localhost:3000/books/find?publisher=publisherName - GET
    findByPublisher: async (req, res, next) => 
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
            return next(err);
        }
    },

    // http://localhost:3000/books - POST
    registerBook: async (req, res, next) => 
    {
        try
        {
            const book = new books(req.body);
            await book.save();

            return res.status(200).send("Successfully created book!");
        }
        catch(err)
        {
            return next(err);
        }  
    },

    // http://localhost:3000/books/:id - PUT
    updateBook: async (req, res, next) => 
    {
        try
        {
            const id = req.params.id;
            await books.findByIdAndUpdate(id, { $set: req.body });

            return res.status(200).send("Successfully updated book!");
        }
        catch(err)
        {
            return next(err);
        }        
    },

    //	http://localhost:3000/books/:id - DELETE
    deleteBook: async (req, res, next) => 
    {
        try
        {
            const id = req.params.id;
            await books.findByIdAndDelete(id);

            return res.status(200).send("Book successfully deleted!");
        }
        catch(err)
        {
            return next(err);
        }    
    }
};

export default booksController;