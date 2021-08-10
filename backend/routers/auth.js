const express = require('express');
const router = express.Router();
const {UserRegister, LoginUser, Logout, Forgotpassword} = require('../Controllers/userController');

// user register api router => /api/v1/register
router.route('/register').post(UserRegister);

router.route('/login').post(LoginUser);

router.route('/password/reset').post(Forgotpassword);

router.route('/logout').get(Logout)

module.exports = router