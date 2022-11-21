import {collectionUsuarios} from "../database/db.js";


export async function userExixtValidation(req, res, next){
    const {email} = req.body;
    const userExists = await collectionUsuarios.findOne({email: email});

    if(userExists){
        return res.status(409).send({message: "Esse email já existe"});
    }
    next();
}