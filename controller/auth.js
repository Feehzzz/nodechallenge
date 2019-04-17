const { User } = require('../models');

 

const authController = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }})

    if(!user) {
        return res.status(401).json({ error: 'Usuario inexistente'})
    }
    if(!(await user.checkPassword(password))){
        return res.status(401).json({ error: 'senha incorreta'})
    }
        user.password = undefined;
        return res.json({ 
            user,
            token: user.generateToken() 
        });
}

module.exports = authController;