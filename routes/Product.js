const routes = require('express').Router()
const { Product } = require('../models');

routes.get('/', (req, res) =>{
    Product.findAll().then(function(products){
        res.json({user: req.userId, product: products})
    })
});

// Rota para cadastrar produtos ao db
routes.post('/', (req, res) => {
    Product.create({
        product: req.body.product,
        price: req.body.price,
        manufacturer: req.body.manufacturer
    }).then(function(){
        res.send('Produto cadastrado')
    }).catch(function(err){
        console.log(err)
        return res.status(400).send({err: 'Error ao cadastrar produto' })

    })

}); 

module.exports = routes;