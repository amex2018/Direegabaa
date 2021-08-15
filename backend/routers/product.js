const express = require('express');
const {getProducts, newProduct, getSingleProduct, UpdateProduct, DeleteProduct} = require('../Controllers/productController')
const {IsAuthenticateUser, IsAuthorizeRole} = require('../MiddleWares/ProtectAuth');

const router = express.Router();
// get all products api 
router.route('/products').get(IsAuthenticateUser, getProducts)

// get single product by its ID api
router.route('/product/:id').get(getSingleProduct)

// create new product by admin api
router.route('/admin/product/new').post(IsAuthenticateUser, IsAuthorizeRole('admin'), newProduct)

// update product by its ID api
router.route('/admin/product/:id').put(IsAuthenticateUser,IsAuthorizeRole('admin'),UpdateProduct)

// delete product by its ID api
router.route('/admin/product/:id').delete(IsAuthenticateUser,IsAuthorizeRole('admin'),DeleteProduct)

module.exports = router
