const routes = require('express').Router()
const { User } = require('../models');

 
// Rota para autenticação de usuários
routes.post('/', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }})

    if(!user) {
        return res.status(401).json({ error: 'User not found'})
    }
    if(!(await user.checkPassword(password))){
        return res.status(401).json({ error: 'Wrong password'})
    }   
        // evita que senha retorne ao efetuar login
        user.password = undefined;
        return res.json({ 
            user,
            token: user.generateToken() 
        });

});

module.exports = routes;