const ErrorHandler =  require('../utils/ErrorHandler');
const CatchAsyncError = require('../MiddleWares/CatchAsyncError');
const User = require('../Model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// user register api => /api/v1/register
exports.UserRegister = CatchAsyncError( async (req, res, next) =>{
    const {name, email, password} = req.body

    const user = User.create({
        name,
        email,
        password,
        avatar: {
           public_id: 'Defualt avatar',
           url: 'https://res.cloudinary.com/direegabaa/image/upload/v1628442246/Avatar/default_wy0nhm.png'
        }
    })

    //generate jwt token
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: "2h"
    })
     user.token = token

    res.status(201).json({
        success: true,
        user
    })

})


// exports.Getuser = async (req, res, next) =>{

//     const users = await User.find();

//     res.status(200).json({
//         success: true,
//         users
//     })
// }


exports.LoginUser = (req, res, next) =>{
   
    const {email, password} = req.body

    // we will check if email and password is entered
    if(!email || !password){
     return   next( new ErrorHandler('Please enter your Password and email', 400))
    }

    // checking or finding user in database
    const user = User.findOne({email})
    if(!user){
        return next(new ErrorHandler('please enter your correct password and email', 401))
    }

    // if password is matched
    const ispassMatched =   bcrypt.compare(password, user.password)

    if(!ispassMatched){
        return next(new ErrorHandler('Your password is wrong please try again!!'))
    }

   const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {
       expiresIn: '2h'
   });    

   user.token = token;

   res.status(200).json({
       success: true,
       user
   })
    
}