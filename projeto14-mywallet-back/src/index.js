import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import joi from "joi";
dotenv.config();

import {postLogin, postCadastro} from "./controllers/usuariosController.js";
import {getMenu, postEntrada, postSaida} from "./controllers/moneyControllers.js";

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

const app = express();
app.use(express.json());
app.use(cors());

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
}catch(erro){
    console.log(erro);
}

export const db = mongoClient.db("mywallet");
export const collectionUsuarios =  db.collection("usuarios");
export const collectionMoney = db.collection("money");

//LOGIN
app.post("/login", postLogin);

//CADASTRO
app.post("/cadastro", postCadastro);

//MENU
app.get("/menu", getMenu);

//ENTRADA
app.post("/entrada", postEntrada);
//SAÍDA
app.post("/saida", postSaida);

app.listen(5000, () => console.log("runing in port: 5000"));