import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { db, collectionUsuarios, userSchema} from "../index.js";

export async function postLogin (req, res){
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
};

export async function postCadastro(req, res){
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
};