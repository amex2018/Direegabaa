  const jwt = require('jsonwebtoken');

  const sendToken = (user, statuscode, res) => {

  //create jwt token
   const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
       expiresIn: process.env.JWT_EXPIRE_TIME
   }) 

//  options for cookie
   const options = {
       expires: new Date( 
           
           Date.now + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
           
           ),
           httpOnly: true
   }

   res.status(statuscode).cookie('token', token, options).json({
       success: true,
       token,
       user
   })

  }

  module.exports = sendToken