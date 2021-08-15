const express =  require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());

// cookies
app.use(cookieParser());

// import the router
const productRouter = require('./routers/product');
const userRouter = require('./routers/auth');
const orderRouter = require('./routers/order')

app.use('/api/v1', productRouter, orderRouter);
app.use('/api/v1', userRouter);

module.exports = app