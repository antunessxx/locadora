import express from "express";
import "dotenv/config";
import user_router from "./routes/user-route.js";
import filme_router from "./routes/filme-route.js";
import aluguel_router from "./routes/aluguel-route.js";

const app = express();

app.use(express.json());

app.use("/user", user_router);
app.use("/filme", filme_router);
app.use("/aliguel", aluguel_router);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));