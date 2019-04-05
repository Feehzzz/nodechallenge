const express = require('express');
const routes = express.Router();
const tokenChecker = require('../controller/tokenChecker');


const authController = require('../controller/authController');
const registerController = require('../controller/registerController');
const listController = require('../controller/listController');

routes.post('/auth', authController);
routes.post('/register', registerController);

routes.use(tokenChecker);
routes.get('/list', listController);



module.exports = routes;