import mongoose from "mongoose";
import authors from "../models/Author.js";

const authorControllers = 
{

    // http://localhost:3000/authors - GET
    listAuthor: async(_, res) =>
    {
        try
        {
            const author = await authors.find();
            
            return res.status(200).json(author);
        }
        catch(err)
        {
            return res.status(500).json({ Message: "there was an internal error on the server", Error: `${err}`});
        }
    },

    // http://localhost:3000/authors/:id - GET
    listAuthorById: async(req, res)=>
    {
        try
        {
            const id = req.params.id;
            const author = await authors.findById(id);

            if(author !== null)
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
            if(err instanceof mongoose.Error.CastError)
            {
                return res.status(400).send({Message: "One or more of the data provided is incorrect!"});
            }
            else
            {
                return res.status(500).send({Message: "Erro interno do servidor!"});
            }
        }
    },

    // http://localhost:3000/authors - POST
    registerAuthor: async(req, res) => 
    {
        try
        {
            const author = new authors(req.body);
            await author.save();
    
            return res.status(200).send("Author successfully registered!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: "there was an internal error on the server", Error: `${err}`});
        }
    },

    // http://localhost:3000/authors/:id - PUT
    updateAuthor: async(req, res) => 
    {
        try
        {
            const id = req.params.id;
            await authors.findByIdAndUpdate(id, {$set: req.body});

            return res.status(200).send("Author updated successfully!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: `Failed to update the author / ${req.params.id}`, Error: `${err}`});
        }
        
    },

    // http://localhost:3000/books/:id - DELETE
    deleteAuthor: async(req, res) => 
    {
        try
        {
            const id = req.params.id;
            await authors.findOneAndDelete(id);

            return res.status(200).send("Author deleted successfully!");
        }
        catch(err)
        {
            return res.status(500).json({ Message: `Failed to delete the author / ${req.params.id}`, Error: `${err}`});
        }
        
    } 
};

export default authorControllers;