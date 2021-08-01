const express =  require('express');
const app = express();

app.use(express.json());



// import the router
const products = require('./routers/product');

app.use('/api/v1', products);


module.exports = app