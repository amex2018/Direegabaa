
exports.getProducts = (req, res, next) => {
    
    res.status(200).json({
        success: true,
        message: "this router will show the products in the database"
    })

}