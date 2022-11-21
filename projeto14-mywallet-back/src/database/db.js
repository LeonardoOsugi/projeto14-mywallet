import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
}catch(erro){
    console.log(erro);
}

export const db = mongoClient.db("mywallet");
export const collectionUsuarios =  db.collection("usuarios");
export const collectionMoney = db.collection("money");