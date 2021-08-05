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

        res.status(error.statusCode).json({
        success: false,
        message: error.message || "Internal server Errors..."
    })
    }

}