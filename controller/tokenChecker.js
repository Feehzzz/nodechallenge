const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async  (req, res, next) => {
    const authHeader = req.headers.authorization;
       

    if(!authHeader)
        return res.status(401).send({ error: 'Token não informado' });

    const [, token ] = authHeader.split(' ');
    // verifica se o token possui o bearer por padrão do jwt
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
        req.userId = decoded.id;

        return next();
    }catch(err){
        return res.status(401).send({ error: 'Token Invalido' });
    };
};