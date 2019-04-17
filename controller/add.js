const { Product } = require('../models');

const addController = (req, res) => {
    Product.create({
        product: req.body.product,
        price: req.body.price,
        manufacturer: req.body.manufacturer
    }).then(function(){
        res.send('Produto cadastrado')
    }).catch(function(err){
        res.send( {err: 'Error ao cadastrar produto' })

    })}
module.exports = addController;