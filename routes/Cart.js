const routes = require('express').Router()
const { Cart, Product } = require('../models');

// Criar carrinho/comprar
routes.post('/', (req, res) => {
    customer = req.userId
    const { product, qty } = req.body
     
    Product.findOne({
        where: {
            id: product
        }
    })
    .then((products) => {
        if(products && customer){
            Cart.create({
                customer: customer,
                description: products.product,
                product: product,
                price: products.price,
                qty: qty,
                total: (products.price * qty) 
            })
            products.update(
                { quantity: (products.quantity - qty )},
                {where: products.id})
            res.send('Purchased successfully!')  
            
                                   
        } 
        else {
            res.status(404).send('Product not found / Wrong id')
        }
        
    })
    .catch((err) => {
        res.send(err)
    })
})


// Listagem de carrinhos/compras
routes.get('/', (req, res) =>{
    Cart.findAll({
        where: {
            customer: req.userId
        }
    }).then((cart) => {
        
        res.json(cart)
    }).catch((err) =>{
        return res.send('fon') 
    })
});

module.exports = routes;