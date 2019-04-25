const routes = require('express').Router()
const { Product } = require('../models');


// Listagem dos produtos cadastrados ao db
routes.get('/', (req, res) =>{
    Product.findAll()
    .then((products)=> {
        res.json({product: products})
    })
});

//  Cadastrar produtos ao db
routes.post('/', async  (req, res) => {
    const { product, price, quantity } = req.body
    
    await Product.findOne({
        where: {
            product: product
        }
    }).then((product) => {
        product.update(
            {price: product.price = price },
            {where: product.id},
        )
        product.update(
            {quantity: product.quantity += quantity },
            {where: product.id}
        )
        res.send('Updated successfully')
    }).catch((err) =>{
        Product.create(req.body)
        return res.send('New Product created') 
    })
     
});
    
module.exports = routes;