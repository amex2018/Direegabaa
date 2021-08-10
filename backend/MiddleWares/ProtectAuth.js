const ErrorHandler = require("../utils/ErrorHandler");
const CatchAsyncError = require("./CatchAsyncError");
const jwt = require('jsonwebtoken');
const User = require('../Model/user');

exports.IsAuthenticateUser = CatchAsyncError( async (req, res, next) => {

      const { token } = req.cookies;

      if(!token){
          return next( new ErrorHandler('Login first to access this resource..', 401))
      }

     const decoded = jwt.verify(token, process.env.JWT_SECRET)

     req.user = await User.findById(decoded.id);

     next();

})

// Authorize user Roles and permission

exports.IsAuthorizeRole = (...roles) =>{
    return(req, res, next) =>{
        if(!roles.includes(req.user.role)){
          return  next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource`, 403))
        }
        next();
    }
}