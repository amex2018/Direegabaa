const express = require('express');
const {getProducts, newProduct, getSingleProduct, UpdateProduct, DeleteProduct} = require('../Controllers/productController')

const router = express.Router();
// get all products api 
router.route('/products').get(getProducts)

// get single product by its ID api
router.route('/product/:id').get(getSingleProduct)

// create new product by admin api
router.route('/admin/product/new').post(newProduct)

// update product by its ID api
router.route('/admin/product/:id').put(UpdateProduct)

// delete product by its ID api
router.route('/admin/product/:id').delete(DeleteProduct)

module.exports = router
