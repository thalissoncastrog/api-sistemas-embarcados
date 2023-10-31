import express from "express";
import connectDatabase from "./config/dbConnection.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso! :-)");
});

const app = express();

export default app;