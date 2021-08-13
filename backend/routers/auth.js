const express = require('express');
const router = express.Router();
const {UserRegister,
        LoginUser, 
        Logout,
        Forgotpassword,
         CreateNewPassword,
        GetAllU,
        GetUserProfile,
        ChangePassword
    } = require('../Controllers/userController');

const {IsAuthenticateUser }= require('../MiddleWares/ProtectAuth')

// user register api router => /api/v1/register
router.route('/register').post(UserRegister);

router.route('/login').post(LoginUser);

router.route('/password/reset').post(Forgotpassword);

router.route('/profile/me').get(IsAuthenticateUser, GetUserProfile);

router.route('/logout').get(Logout)
router.route('/password/reset/:token').post(CreateNewPassword);
router.route('/users').get(GetAllU)
router.route('/changepassword/me').post(IsAuthenticateUser, ChangePassword)
module.exports = router