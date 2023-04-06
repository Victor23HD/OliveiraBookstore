import authors from "../models/Author.js";

const authorControllers = {

    listAuthor: async(_, res) =>{
        res.status(200).json(await authors.find());
    },

    registerAuthor: async(req, res) => {
        const author = new authors(req.body);
        await author.save();
        res.status(200).send("Author successfully registered!");
    },

    updateAuthor: async(req, res) => {
        const id = req.params.id;
        await authors.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send("Author updated successfully!");
    },

    deleteAuthor: async(req, res) => {
        const id = req.params.id;
        await authors.findOneAndDelete(id);
        res.status(200).send("Author deleted successfully!");
    } 
};

export default authorControllers;