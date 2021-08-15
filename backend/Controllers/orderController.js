const Order = require('../Model/order');
const CatchAsyncError = require('../MiddleWares/CatchAsyncError');
const ErrorHandler = require('../utils/ErrorHandler');
const Product = require('../Model/product');
const { find } = require('../Model/product');

exports.CreateOrder = CatchAsyncError( async(req, res, next) =>{

    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    } = req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        piadAt: Date.now(),
        user: req.user._id,
        
    })

    res.status(201).json({
        success: true,
        order
    })
})

// get signle user order => /api/v1/order/:id
exports.GetSingleOrder = CatchAsyncError( async (req,res, next) =>{
  
    const order = await Order.findById(req.params.id).populate('User', 'name email')
    
    if(!order){
        return next(new ErrorHandler('No order found with ID', 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// get loggin in user order => api/v1/myorder
exports.MyOrder = CatchAsyncError( async(req, res, next)=>{
    const orders = await Order.find({user: req.user._id})
    
    res.status(200).json({
        success: true,
        orders
    })
})

// get all order => api/v1/admin/orders
exports.AllOrder = CatchAsyncError( async(req, res, next)=>{
    const orders = await Order.find()
    
     let totalAmount = 0;
    orders.forEach(order =>{
        totalAmount += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        totalAmount,
        count: orders.length,
        orders
    })
})