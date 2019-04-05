const { Product } = require('../models');

const listController = (req, res) => {
    Product.findAll().then(function(products){
        res.json(products)
    })
    
}

module.exports = listController;