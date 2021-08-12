const ErrorHandler =  require('../utils/ErrorHandler');
const CatchAsyncError = require('../MiddleWares/CatchAsyncError');
const User = require('../Model/user');
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');
const crypto = require('crypto'); 
const SendEmail = require('../utils/SendMail');
const { json } = require('body-parser');

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

    sendToken(user, 200, res);

})

exports.GetAllU = CatchAsyncError( async(req, res, next)=>{
    const user = await User.find();
    res.status(200).json({
        success: true,
        count: user.lenght,
        user
    })
})

exports.LoginUser = CatchAsyncError( async (req, res, next) =>{
     
    const {email, password} = req.body

    if(!email && !password){
        res.status(404).json({
            success: false,
            message: "empty password and email"
        })
    }

    const user = await User.findOne({email})

     const PasswordMatched = await bcrypt.compare(password, user.password);

     if(!PasswordMatched){
         res.status(404).json({
             success: false,
             message: "Invalid password!"
         })
     }

    sendToken(user, 200, res)

});

exports.Forgotpassword = CatchAsyncError( async(req, res, next) =>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler('Invalid Email Address please Enter Valid Email', 401))
    }

  
    // generate token using crypto
    const resetToken  = crypto.randomBytes(12).toString('hex')
    // create hash and set resetPasswordToken
    const token = user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    user.resetPasswordExpire = Date.now() + 3600000;

    await user.save({ validateBeforeSave: false});

    const ResetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${token}`
    const message = `your password reset token is a follow: /n/n${ResetUrl}/n/n if you have not requested this email, then ignore it.`

    try {
       await SendEmail({
           email: user.email,
           subject: "DireeGabaa Password Recovery..",
           message
        })
        res.status(200).json({
            success: true,
            message: `Email send to ${user.email}`
        })

    } catch (err) {
        user.resetPasswordToken = undefined,
        user.resetPasswordExpire = undefined
    
        await user.save({ validateBeforeSave: false});

        return next( new ErrorHandler(err.message, 500))

    }
  
})

// resetpassword
exports.CreateNewPassword = CatchAsyncError( async (req, res, next)=>{
    
    const {newPassword, confirmPassword} = req.body

   await User.findOne({resetPasswordToken: req.params.token, resetPasswordExpire: {$gt: Date.now()}}).then((user) =>{

       if(!user){
           return next (new ErrorHandler('password reset is invalid or has been expire'))
       }
       if(newPassword !== confirmPassword){
        return next(new ErrorHandler('Password does not match', 400))   
       }
       bcrypt.hash(newPassword, 10).then(hashPassword=>{
         user.password = newPassword
         resetPasswordToken = undefined
         resetPasswordExpire = undefined
         user.save().then((savedata) =>{
             res.json({message: 'password update is successfuly'})
         })
       })
   }).catch(err =>{
           console.log(err)
   })
    
    })

// logout api => /api/v1/logout

exports.Logout = CatchAsyncError( async(req, res, next)=>{
    res.cookie('token', null , {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logging out.."
    })
})