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
        const stringErr = Object.values(err.errors).map(erro => erro.message).join(";");
        
        return res.status(400).send({Message: "There was a data validation error!",
            Error: stringErr.split(";") /*Array*/ });
    }
    else
    {
        return res.status(500).send({Message: "Internal server error!"});
    }
}

export default errorHandler;