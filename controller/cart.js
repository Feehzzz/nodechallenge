const { Cart } = require('../models');


const cartController = (req, res,) => {
    
    Cart.create({
        customer: req.body.user,
        product: req.body.product,
        price: req.body.price,
        qty: req.body.qty
    }).then(function(){
        res.send('Carrinho cadastrado')
    }).catch(function(err){
        console.log(err)
        return res.status(400).send ({ err: 'Error ao criar carrinho' })

    })}

module.exports = cartController;