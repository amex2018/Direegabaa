const express = require('express');
const {getProducts, newProduct, getSingleProduct, UpdateProduct, DeleteProduct} = require('../Controllers/productController')
const {IsAuthenticateUser, IsAuthorizeRole} = require('../MiddleWares/ProtectAuth');

const router = express.Router();
// get all products api 
router.route('/products').get(IsAuthenticateUser,IsAuthorizeRole('Admin'), getProducts)

// get single product by its ID api
router.route('/product/:id').get(getSingleProduct)

// create new product by admin api
router.route('/admin/product/new').post(IsAuthenticateUser, IsAuthorizeRole('Admin'), newProduct)

// update product by its ID api
router.route('/admin/product/:id').put(IsAuthorizeRole('Admin'),UpdateProduct)

// delete product by its ID api
router.route('/admin/product/:id').delete(IsAuthorizeRole('Admin'),DeleteProduct)

module.exports = router
