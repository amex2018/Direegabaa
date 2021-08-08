const ErrorHandler =  require('../utils/ErrorHandler');
const CatchAsyncError = require('../MiddleWares/CatchAsyncError');
const User = require('../Model/user');


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
    res.status(201).json({
        success: true,
        user
    })

})


exports.Getuser = async (req, res, next) =>{

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
}


