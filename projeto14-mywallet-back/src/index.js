import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import joi from "joi";
import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
dotenv.config();

const userSchema = joi.object({
    nome: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    confirmSenha: joi.string().required()
});

const moneySchema = joi.object({
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

const db = mongoClient.db("mywallet");
const collectionUsuarios =  db.collection("usuarios");
const collectionMoney = db.collection("money");

//LOGIN
app.post("/login", async (req, res) =>{
    const {email, senha} = req.body;
    const token = uuidv4();
    if(!email || !senha){
        res.status(400).send("Você não preencheu o campo email ou senha");
        return
    }
    try{
        const usuarioExiste = await collectionUsuarios.findOne({email});

        if(usuarioExiste && bcrypt.compareSync(senha, usuarioExiste.senha)){
            await db.collection("sessions").insertOne({
                token,
                userId: usuarioExiste._id
            });
            res.send({token});
            return
        }else{
            res.sendStatus(401);
            return
        }
    }catch(err){
        res.status(500).send(err);
    }
});

//CADASTRO
app.post("/cadastro", async (req, res) => {
    const {nome, email, senha, confirmSenha} = req.body;

    try{
        const userExists = await collectionUsuarios.findOne({email: email});

        if(userExists){
            return res.status(409).send({message: "Esse email já existe"});
        }
        const { error } = userSchema.validate({nome,email,senha,confirmSenha},{abortEarly:false});

        if(error){
            const errors = error.details.map((detail) => detail.message);
            return res.status(400).send(errors);
        }

        if(senha !== confirmSenha){
            res.status(400).send("Uma senha esta diferente da outra");
            return;
        }

        const hashPassword = bcrypt.hashSync(senha, 10);
        await collectionUsuarios.insertOne({nome, email, senha: hashPassword, confirmSenha: hashPassword});
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
});

//MENU
app.get("/menu", async (req, res) =>{
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if(!token){
        return res.sendStatus(401);
    }
    try{
        const session = await db.collection("sessions").findOne({token});
        const lista = await collectionMoney.find().toArray();
        const user = await collectionUsuarios.findOne({_id: session?.userId});
        if(!user){
            return res.sendStatus(401);
        }
        delete user.senha;
        delete user.confirmSenha;
        res.send({lista, user});
    }catch(err){
        console.log(err);
        res.send(500);
    }
});

//ENTRADA
app.post("/entrada", async (req, res) => {
    const {valor, descricao} = req.body;

    try{
        const { error } = moneySchema.validate({valor, descricao},{abortEarly:false});

        if(error){
            const errors = error.details.map((detail) => detail.message);
            return res.status(400).send(errors);
        }

        await collectionMoney.insertOne({
            status: "entrada",
            valor,
            descricao
        });

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
})
//SAÍDA
app.post("/saida", async (req, res)=> {
    const {valor, descricao} = req.body;

    try{
        const { error } = moneySchema.validate({valor, descricao},{abortEarly:false});

        if(error){
            const errors = error.details.map((detail) => detail.message);
            return res.status(400).send(errors);
        }

        await collectionMoney.insertOne({
            status: "saída",
            valor,
            descricao
        });
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
})


app.listen(5000, () => console.log("runing in port: 5000"));