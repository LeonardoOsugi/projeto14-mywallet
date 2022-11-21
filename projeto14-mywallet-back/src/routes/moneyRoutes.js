import {getMenu, postEntrada, postSaida} from "../controllers/moneyControllers.js";
import {Router} from "express";
import { moneyTokenExist } from "../middlewares/moneyTokenExist.js";
import { moneySchemaValidation } from "../middlewares/moneySchemaValidation.js";
import { moneyBodyPreenchido } from "../middlewares/moneyBodyPreenchido.js";

const router = Router();
//MENU
router.get("/menu",moneyTokenExist, getMenu);
//ENTRADA
router.post("/entrada",moneySchemaValidation, moneyBodyPreenchido, postEntrada);
//SAÍDA
router.post("/saida",moneySchemaValidation, moneyBodyPreenchido, postSaida);

export default router;