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
    .then((item) => {
        if(qty <= item.quantity && 1 <= qty){
            Cart.create({
                customer: customer,
                description: item.product,
                product: product,
                price: item.price,
                qty: qty,
                total: (item.price * qty) 
            })
            item.update(
                { quantity: (item.quantity - qty )},
                { where: item.id})
            res.send('Purchased successfully!')  
                                 
        } 
        else {
            res.status(400).send('No stock available')
        } 
    })
    .catch((err) => {
        res.status(400).send('Product not found')
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
    }).catch((err) => {
        return res.send('error during retrieving cart' +err) 
    })
});

module.exports = routes;