
const errorHandler = (err, req, res) => 
{
    // eslint-disable-next-line no-undef
    if(err instanceof mongoose.Error.CastError)
    {
        return res.status(400).send({Message: "One or more of the data provided is incorrect!"});
    }
    else
    {
        return res.status(500).send({Message: "Erro interno do servidor!"});
    }
};

export default errorHandler;