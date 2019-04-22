const { Cart } = require ('../models');

const shopCart = (req, res) => { 
    Cart.findAll().then(function(carts){
        res.json({user: req.userId, cart: carts})
    })}


module.exports = shopCart;