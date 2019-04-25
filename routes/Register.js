const routes = require('express').Router()
const { User } = require('../models');

// Rota para registro de usuários 
routes.post('/',  async (req, res) => {
    const { email } = req.body;
    
    try {
        if (await User.findOne ({ where: {email} }))
            return res.status(400).send({ error: 'Email already exists' });

        const user = await User.create(req.body);  
        // evitando o retorno da senha ao criar cadastro
        user.password = undefined;

        return res.send({ 
            user, 
            token: user.generateToken({ id: user.id }),
        });
    }catch (err) {
        
        return res.status(400).send ({ error: 'Registration fail' });
        
    }
    
});

module.exports = routes;