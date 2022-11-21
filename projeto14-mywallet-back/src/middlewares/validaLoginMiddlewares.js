export function validateLogin(req, res, next){
    const {email, senha} = req.body;
    if(!email || !senha){
        res.status(400).send("Você não preencheu o campo email ou senha");
        return
    }
    next();
}