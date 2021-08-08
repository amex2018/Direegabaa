const express = require('express');
const router = express.Router();
const {UserRegister, LoginUser} = require('../Controllers/userController');

// user register api router => /api/v1/register
router.route('/register').post(UserRegister);

router.route('/login').post(LoginUser);

module.exports = router