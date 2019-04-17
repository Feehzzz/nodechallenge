const express = require('express');
const routes = express.Router();
const tokenChecker = require('../controller/token');


const authController = require('../controller/auth');
const registerController = require('../controller/register');
const listController = require('../controller/list');
const addController = require('../controller/add');





routes.post('/auth', authController);
routes.post('/register', registerController);
routes.post('/list/add', addController);

routes.use(tokenChecker);
routes.get('/list', listController);



module.exports = routes;