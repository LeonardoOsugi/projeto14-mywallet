import {postLogin, postCadastro} from "../controllers/usuariosController.js";
import { Router} from "express";
import { validateLogin } from "../middlewares/validaLoginMiddlewares.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.js";
import { userExixtValidation } from "../middlewares/userExistValidation.js";
import { userSenhaDiferente } from "../middlewares/userSenhaDiferente.js";

const router = Router();
//LOGIN
router.post("/login", validateLogin, postLogin);

//CADASTRO
router.post("/cadastro",userExixtValidation, userSchemaValidation,userSenhaDiferente, postCadastro);

export default router;