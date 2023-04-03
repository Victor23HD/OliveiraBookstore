import authors from "../models/Author.js";

class authorControllers
{

    static listAuthor = async(_, res) =>{
        res.status(200).json(await authors.find());
    }

    static registerAuthor = async(req, res) => {
        const author = new authors(req.body);
        await author.save();
        res.status(200).send("Author successfully registered!");
    }

    static updateAuthor = async(req, res) => {
        const id = req.params.id;
        await authors.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send("Author updated successfully!");
    }

    static deleteAuthor = async(req, res) => {
        const id = req.params.id;
        await authors.findOneAndDelete(id);
        res.status(200).send("Author deleted successfully!");
    } 
}

export default authorControllers;