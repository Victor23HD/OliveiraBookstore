import errorHandler from "./middlewares/errorHandler.js";
import Express from "express";
import database from "./config/dbConnect.js";
import routes from "./routes/index.js";

database.on("error", console.log.bind( console, "Error na conexão!"));
database.once("open", () => {
    console.log("Conexão feita com sucesso!");
});

const app = Express();
app.use(Express.json()); 

routes(app);
app.use(errorHandler);




export default app;