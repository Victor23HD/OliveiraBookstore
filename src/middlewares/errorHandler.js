/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

function errorHandler(err, req, res, next) 
{
    // eslint-disable-next-line no-undef
    if(err instanceof mongoose.Error.CastError)
    {
        return res.status(400).send({Message: "One or more of the data provided is incorrect!"});
    }
    else if (err instanceof mongoose.Error.ValidationError)
    {
        return res.status(400).send({Message: "There was a data validation error!"});
    }
    else
    {
        return res.status(500).send({Message: "Erro interno do servidor!"});
    }
}

export default errorHandler;