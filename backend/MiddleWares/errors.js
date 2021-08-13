const ErrorHandler = require('../utils/ErrorHandler');


module.exports = (err, req, res, next) =>{

    err.statusCode = err.statusCode || 500
   
    if(process.env.NODE_ENV === 'DEVELOPMENT'){

        res.status(err.statusCode).json({
            success: false,
            error: err,
            errmessage: err.message,
            stack: err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION'){
        let error = {...err}

        err.message = err.message

        // Wrong mongoose object ID errors
        if(err.name === 'CastError'){
            const message = `Resource is not found with${err.path}`,
            error = new ErrorHandler(message, 404)
        }

        // Handling mongoose validation Error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.error).map(values => values.message);
            error = new ErrorHandler(message, 404)
        }

        // handling mongoose duplicate key error
        if(err.name === 'E11000'){
            const message = `Duplicate ${Object.keys(err.keyValues) }entered`
            error = new ErrorHandler(message, 400)
        }

        // handling wrong jwt error
        if(err.name === 'JsonWebTokenError'){
            const message = 'Json web token is invalid try again!!'
            error = new ErrorHandler(message, 400)
        }
        // handling expired jwt error
        if(err.name === 'TokenExpiredError'){
            const message = 'Json web Token is Expired try again!!'
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statusCode).json({
        success: false,
        message: error.message || "Internal server Errors..."
    })
    }

}