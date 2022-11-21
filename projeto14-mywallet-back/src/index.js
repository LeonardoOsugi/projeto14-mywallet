import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joi from "joi";
dotenv.config();

import usuariosRouters from "./routes/usuariosRoutes.js";
import moneyRouters from "./routes/moneyRoutes.js";

const app = express();
app.use(express.json());
// app.use(cors());
app.use(usuariosRouters);
app.use(moneyRouters);

export const userSchema = joi.object({
    nome: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    confirmSenha: joi.string().required()
});

export const moneySchema = joi.object({
    valor: joi.string().required(),
    descricao: joi.string().required()
})

app.listen(5000, () => console.log("runing in port: 5000"));