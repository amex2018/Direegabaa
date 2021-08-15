const app = require('./app');
const dotenv = require('dotenv');
const { path } = require('./app');
const ConnectDB = require('./config/database');

// handle unhandle ancaught exception
process.on('uncaughtException', error =>{
    console.log(`Error: ${error.message}`)
    console.log('Shutting down due to uncaught exception')
    process.exit(1)
})

dotenv.config({path: 'backend/config/config.env'});

// connecting database
ConnectDB();

const server = app.listen(process.env.PORT, () =>{
    console.log(`server is running at port: ${process.env.PORT} in host ${process.env.NODE_ENV} model`);
})

// handle unhandel promise error

process.on('unhandledRejection', error =>{
    console.log(`ERROR: ${error.stack}`)
    console.log('Shutting down the server due to Unhadled Promise Rejection ')
    server.close(()=>{
        process.exit()
    })
})
