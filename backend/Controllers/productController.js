const Product = require('../Model/product');
const ErrorHandler = require('../utils/ErrorHandler');
const CatchAsyncErrors = require('../MiddleWares/CatchAsyncError');
const ApiFeatures = require('../utils/ApiFeatures');
const crypto = require('crypto'); 
// create new product api => /api/v1/admin/product/new
exports.newProduct = CatchAsyncErrors( async (req, res, next) =>{

     req.body.user = req.user.id;

   const product = await Product.create(req.body);

   res.status(201).json({
       success: true,
       product
   })
})

// get all products api => /api/v1/products
exports.getProducts = CatchAsyncErrors(async (req, res, next) => {

    //  search api feature
    // const apiFeatures = new ApiFeatures(Product.findOne(), req.query)
    //                     .search()

    // const products = await apiFeatures.query;
    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })

})


// get single product for detial api => /api/v1/product/:id
exports.getSingleProduct = CatchAsyncErrors(async (req, res, next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next (new ErrorHandler('Product Not Found', 400));
    }
  
    res.status(200).json({
        success: true,
        product
    })
    
})


// update product using product ID api => /api/v1/admin/product/:id
exports.UpdateProduct = CatchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        return
        res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
})


// Delete the product from the database using Product ID api => /api/v1/admin/product/:id
exports.DeleteProduct = CatchAsyncErrors(async (req, res, next) => {

    const product = await Product.findByIdAndDelete(req.params.id);
    
    if(!product){
        return
        res.status(404).json({
            success: false,
            message: "Product not Found"
        })
    }
  
    res.status(200).json({
        success: true,
        message: "Deleting successfully...."
    })

})
