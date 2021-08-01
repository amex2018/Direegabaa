const app = require('./app');
const dotenv = require('dotenv');
const { path } = require('./app');
const ConnectDB = require('./config/database');

dotenv.config({path: 'backend/config/config.env'});

// connecting database
ConnectDB();

app.listen(process.env.PORT, () =>{
    console.log(`server is running at port: ${process.env.PORT} in ${process.env.NODE_ENV} model`);
})