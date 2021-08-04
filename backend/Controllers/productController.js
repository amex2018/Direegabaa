const Product = require('../Model/product');

// create new product api => /api/v1/admin/product/new
exports.newProduct = async (req, res, next) =>{
   const product = await Product.create(req.body);

   res.status(201).json({
       success: true,
       product
   })
}

// get all products api => /api/v1/products
exports.getProducts = async (req, res, next) => {
    
    const products = await Product.find(); 

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })

}


// get single product for detial api => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404).json({
            success: false,
            message: "This product is not Found with this ID"
        })
    }
  
    res.status(200).json({
        success: true,
        product
    })
    
}


// update product using product ID api => /api/v1/admin/product/:id
exports.UpdateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product){
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
}


// Delete the product from the database using Product ID api => /api/v1/admin/product/:id
exports.DeleteProduct = async (req, res, next) => {

    const product = await Product.findByIdAndDelete(req.params.id);
    
    if(!product){
        res.status(404).json({
            success: false,
            message: "Product not Found"
        })
    }
  
    res.status(200).json({
        success: true,
        message: "Deleting successfully...."
    })

}