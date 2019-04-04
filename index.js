// import das dependencias
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

//database connection
const db = require('./config/server');



// faz com que o node entenda as requisições recebendo em json e url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(require('./config/routes'));

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});