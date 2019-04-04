const express = require('express');
const routes = express.Router();

const authController = require('../controller/authController');
const registerController = require('../controller/registerController')

routes.post('/auth', authController);
routes.post('/register', registerController);


module.exports = routes;