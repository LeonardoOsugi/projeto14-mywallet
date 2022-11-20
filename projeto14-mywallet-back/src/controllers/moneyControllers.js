import { db, moneySchema, collectionMoney, collectionUsuarios} from "../index.js";

export async function getMenu (req, res){
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
        res.send({lista, user, token});
    }catch(err){
        console.log(err);
        res.send(500);
    }
};

export async function postEntrada (req, res){
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
};

export async function postSaida (req, res){
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
};