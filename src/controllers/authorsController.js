import authors from "../models/Author.js";

const authorControllers = 
{

    // http://localhost:3000/authors - GET
    listAuthor: async(_, res, next) =>
    {
        try
        {
            const author = await authors.find();
            return res.status(200).json(author);
        }
        catch(err)
        {
            return next(err);
        }
    },

    // http://localhost:3000/authors/:id - GET
    listAuthorById: async(req, res, next)=>
    {
        try
        {
            const id = req.params.id;
            const author = await authors.findById(id);
            if(author != null)
            {
                return res.status(200).json(author);
            }
            else
            {
                return res.status(404).send({Message: "Id of author not found!"});
            }
        }
        catch(err)
        {
            return next(err);
        }
    },

    // http://localhost:3000/authors - POST
    registerAuthor: async(req, res, next) => 
    {
        try
        {
            const author = new authors(req.body);
            await author.save();
    
            return res.status(200).send("Author successfully registered!");
        }
        catch(err)
        {
            return next(err);
        }
    },

    // http://localhost:3000/authors/:id - PUT
    updateAuthor: async(req, res, next) => 
    {
        try
        {
            const id = req.params.id;
            await authors.findByIdAndUpdate(id, {$set: req.body});

            return res.status(200).send("Author updated successfully!");
        }
        catch(err)
        {
            return next(err);
        }
        
    },

    // http://localhost:3000/books/:id - DELETE
    deleteAuthor: async(req, res, next) => 
    {
        try
        {
            const id = req.params.id;
            await authors.findOneAndDelete(id);

            return res.status(200).send("Author deleted successfully!");
        }
        catch(err)
        {
            return next(err);
        }
        
    } 
};

export default authorControllers;