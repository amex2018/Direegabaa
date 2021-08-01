const express = require('express');
const {getProducts} = require('../Controllers/productController')

const router = express.Router();

router.route('/products').get(getProducts)

module.exports = router
