const routes = require('express').Router()
const { Cart } = require('../models');

// Criar carrinho/comprar
routes.post('/', (req, res) => {
    Cart.create({
        customer: req.userId,
        product: req.body.product,
        price: req.body.price,
        qty: req.body.qty

    }).then(function(){
        res.send('Carrinho cadastrado')
    }).catch(function(err){
        console.log(err)
        
        return res.status(400).send({error: 'Erro ao criar carrinho' })
    })
})

// Listagem de carrinhos/compras
routes.get('/', (req, res) =>{
    Cart.findAll().then(function(carts){
        res.json({ cart:carts})
    })
});

module.exports = routes;