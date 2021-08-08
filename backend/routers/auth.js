const express = require('express');
const router = express.Router();
const {UserRegister, Getuser} = require('../Controllers/userController');

// user register api router => /api/v1/register
router.route('/register').post(UserRegister);

router.route('/user').get(Getuser)
module.exports = router