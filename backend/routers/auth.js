const express = require('express');
const router = express.Router();
const { 

        UserRegister,
        LoginUser, 
        Logout,
        Forgotpassword,
        CreateNewPassword,
        GetAllByAdmin,
        GetUserProfile,
        GetSpecificUser,
        ChangePassword,
        UpdateUserByAdmin,
        UpdateProfile,
        DeleteUserByAdmin,
        DeleteMyAccount
        
    } = require('../Controllers/userController');

const { IsAuthenticateUser , IsAuthorizeRole }= require('../MiddleWares/ProtectAuth')

// user Api router => /api/v1/
router.route('/register').post(UserRegister);
router.route('/login').post(LoginUser);
router.route('/password/reset').post(Forgotpassword);
router.route('/profile/me').get(IsAuthenticateUser, GetUserProfile);
router.route('/logout').get(Logout)
router.route('/password/reset/:token').post(CreateNewPassword);
router.route('/admin/allusers').get(IsAuthenticateUser,IsAuthorizeRole('admin'), GetAllByAdmin)
router.route('/admin/updateuser/:id').put(IsAuthenticateUser,IsAuthorizeRole('admin'), UpdateUserByAdmin)
router.route('/admin/deleteuser/:id').delete(IsAuthenticateUser, IsAuthorizeRole('admin'), DeleteUserByAdmin)
router.route('/admin/user/:id').get(IsAuthenticateUser, IsAuthorizeRole('admin'), GetSpecificUser)
router.route('/profile/update/me').put(IsAuthenticateUser, UpdateProfile)
router.route('/changepassword/me').post(IsAuthenticateUser, ChangePassword)
router.route('/deletemyaccount').delete(IsAuthenticateUser, DeleteMyAccount)

module.exports = router