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
routes.post('/', (req, res) => {
    const { product, price, quantity } = req.body
    
    Product.findOne({
        where: {product}
    }).then((item) => {
        if(item){
            Product.update(
                {quantity: item.quantity + quantity },
                {where:{id: item.id}}
            )
            Product.update(
                {price: item.price = price},
                {where:{id: item.id}}
            )
            return res.send('Updated successfully ')
        } else {
            Product.create(req.body)
            return res.send('New item added')
        }
        
    }).catch((err) => {
        console.log(err)
        return res.status(400).send('Algo deu errado ' + err)
    })
     
});
    
module.exports = routes;