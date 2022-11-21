export function moneyBodyPreenchido(req, res, next){
    const {valor, descricao} = req.body;
    if(!valor || !descricao){
        return res.sendStatus(401);
    }
    next();
}
