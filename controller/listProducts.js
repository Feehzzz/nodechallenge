const { Product } = require('../models');

const listController = (req, res) => {

    Product.findAll().then(function(products){
        res.json({user: req.userId, product: products})
    })
    
};

        
module.exports = listController;