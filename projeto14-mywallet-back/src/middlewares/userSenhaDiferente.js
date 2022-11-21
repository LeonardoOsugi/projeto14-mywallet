export function userSenhaDiferente(req, res, next){
    const {senha, confirmSenha} = req.body;
    if(senha !== confirmSenha){
        res.status(400).send("Uma senha esta diferente da outra");
        return;
    }
    next();
}
