const ErrorHandler =  require('../utils/ErrorHandler');
const CatchAsyncError = require('../MiddleWares/CatchAsyncError');
const User = require('../Model/user');
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');
const crypto = require('crypto'); 
const SendEmail = require('../utils/SendMail');

// user register api => /api/v1/register
exports.UserRegister = CatchAsyncError( async (req, res, next) =>{

    const {name, email, password} = req.body;

    //   check email is exist email
    const CheckEmail = await User.findOne({email})

    if(CheckEmail){
        res.status(403).json({
            success: false,
            message: 'Email is already register.. Please try another email.'
        })
    }
    const user = User.create({
        name,
        email,
        password,
        avatar: {
           public_id: 'Defualt avatar',
           url: 'https://res.cloudinary.com/direegabaa/image/upload/v1628442246/Avatar/default_wy0nhm.png'
        }
    })

    res.status(201).json({
        success: true,
        message: 'user successfully registered',
        user
    })

})


exports.LoginUser = async (req, res, next) =>{
     
    const {email, password} = req.body

    if(!email && !password){
        res.status(404).json({
            success: false,
            message: "empty password and email"
        })
    }

    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({
            success: false,
            message: 'Invalid email and password please enter valid password and email'
        })
    }
    
     const PasswordMatched = await bcrypt.compare(password, user.password)
//    console.log(PasswordMatched)
     if(!PasswordMatched){
         res.status(404).json({
             success: false,
             message: "Invalid password and email Please try again!"
         })
     }else{

    sendToken(user, 200, res)
     }


};

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
exports.CreateNewPassword = async (req, res, next)=>{
    
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
         user.resetPasswordToken = null
         user.resetPasswordExpire = null
         user.save().then((savedata) =>{
             res.status(200).json({
                 message: 'password update is successfuly',
                 savedata
                })

         })
       })
   }).catch(err =>{
           console.log(err)
   })
    
    }

// user profile => /api/v1/profile/me
exports.GetUserProfile = CatchAsyncError( async (req, res, next)=>{

    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user
    })
})


// Change password => /api/v1/changepassword/me
exports.ChangePassword =  async (req, res, next) => {

    const user = await User.findById(req.user._id)
        
    // check old password is correct
    const PrevIsMatched = await bcrypt.compare(req.body.oldPassword, user.password);
       
    if(!PrevIsMatched){
        return next(new ErrorHandler('old password is incorrect' ,404))
    }

    // check new and confirm password
    if(req.body.newPassword !== req.body.confirmPassword){
        return next( new ErrorHandler('password does not matched', 403))
    }

    user.password = req.body.newPassword

    await user.save();
    
    sendToken(user, 200, res)
}

// Get User BY Admin => /api/v1/admin/allusers
exports.GetAllByAdmin = CatchAsyncError( async(req, res, next)=>{
    const UserCounts = await User.countDocuments();

    const user = await User.find();
    res.status(200).json({
        success: true,
        count: UserCounts,
         user
    })
})

// get user details by admin=> /api/v1/admin/user/:id
exports.GetSpecificUser = CatchAsyncError( async(req, res, next)=>{
    const user = await User.findById(req.params.id)
     if(!user){
         res.status(404).json({
             success: true,
             message: "User Details is not Found"
         })
     }
    res.status(200).json({
        success: true,
         user
    })
})
// update user by admin => /api/v1/admin/userupdate/:id
exports.UpdateUserByAdmin = CatchAsyncError( async(req, res, next)=>{
 let user = await User.findById(req.params.id)
 if(!user){
     return next(new ErrorHandler('User Not Found!', 404))
 }

 user = await User.findByIdAndUpdate(user._id, req.body, {
     new: true,
     runValidators: true,
     useFindAndModify: false
 })
  res.status(200).json({
      success: true,
      user
  })
})

// update profile =>/api/v1/profile/me
exports.UpdateProfile = CatchAsyncError( async(req, res, next)=>{
 const UpdateData ={
     name: req.body.name,
     email: req.body.email
 }

 user = await User.findByIdAndUpdate(req.user._id, UpdateData, {
     new: true,
     runValidators: true,
     useFindAndModify: false
 })
  res.status(200).json({
      success: true,
      user
  })
})


// delete user by admin => /api/v1/admin/userdelete/:id
exports.DeleteUserByAdmin = CatchAsyncError( async(req, res, next)=>{
  const user = await User.findById(req.params.id)
 if(!user){
     return next(new ErrorHandler('User Not Found!', 404))
 }
 await User.findByIdAndDelete(user._id)
 res.status(200).json({
     success: true,
     message: "User Deleted is successfully..!"
 })


})
// deletemyAccount => /api/v1/deletemyaccount/:id
exports.DeleteMyAccount = CatchAsyncError(async(req, res, next)=>{
    const deleteuser = await User.findById(req.user._id)
    await User.findByIdAndDelete(deleteuser)
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
      res.status(200).json({
        success: true,
        message: "Logging out.."
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