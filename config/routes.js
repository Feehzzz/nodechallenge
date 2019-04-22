const express = require('express');
const routes = express.Router();
const tokenChecker = require('../controller/token');

// importando os modulos de controle 
const authController = require('../controller/auth');
const registerController = require('../controller/register');
const listController = require('../controller/listProducts');
const addController = require('../controller/addProducts');
const cartController = require('../controller/addCart');
const shopCart = require('../controller/listCart');






routes.post('/auth', authController);
routes.post('/register', registerController);


routes.use(tokenChecker);
routes.post('/add-to-cart', cartController);
routes.post('/list/add-products', addController);
routes.get('/list/products', listController);
routes.get('/shopping-cart', shopCart);



module.exports = routes;