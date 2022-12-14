import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { db, collectionUsuarios} from "../database/db.js";


export async function postLogin (req, res){
    const {email, senha} = req.body;
    const token = uuidv4();
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
};

export async function postCadastro(req, res){
    const {nome, email, senha} = req.body;

    try{
        const hashPassword = bcrypt.hashSync(senha, 10);
        await collectionUsuarios.insertOne({nome, email, senha: hashPassword, confirmSenha: hashPassword});
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};