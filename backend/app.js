const express =  require('express');
const app = express();

app.use(express.json());



// import the router
const productRouter = require('./routers/product');
const userRouter = require('./routers/auth');

app.use('/api/v1', productRouter);
app.use('/api/v1', userRouter);

module.exports = app