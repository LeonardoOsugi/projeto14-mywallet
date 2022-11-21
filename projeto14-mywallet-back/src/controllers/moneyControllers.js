import {collectionMoney, collectionUsuarios, db} from "../database/db.js"

export async function getMenu (req, res){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    try{
        const session = await db.collection("sessions").findOne({token});
        const lista = await collectionMoney.find().toArray();
        const user = await collectionUsuarios.findOne({_id: session?.userId});
        if(!user){
            return res.sendStatus(401);
        }
        delete user.senha;
        delete user.confirmSenha;
        delete user.email;
        res.send({lista, user});
    }catch(err){
        console.log(err);
        res.send(500);
    }
};

export async function postEntrada (req, res){
    const {valor, descricao} = req.body;

    try{
        await collectionMoney.insertOne({
            status: "entrada",
            valor,
            descricao
        });

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};

export async function postSaida (req, res){
    const {valor, descricao} = req.body;

    try{

        await collectionMoney.insertOne({
            status: "saída",
            valor,
            descricao
        });
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};