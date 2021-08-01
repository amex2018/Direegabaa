const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the product name."],
        trim: true,
        maxLenght: [100, "Product name cannot exceed 100 character."]
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price."],
        default: 0.0
    },
    discription: {
        type: String,
        required: [true, "Please enter the product discription."]   
    },
    ratings: {
        type: Number,
        defualt: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: [true, "please enter the product images"]
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'please select valid category for this product'],
        enum: {
            values: [
                "Electronics",
                "Camera",
                "Labtop",
                "Accessories",
                "HeadPhone",
                "Food",
                "Books",
                "Clothes/Shoes",
                "Beauty/health",
                "Sport",
                "Home"
            ],
            message: 'please select category for product'
        }
    },
    seller: {
        type: String,
        required: [true, "please enter product seller."]
    },
    stock: {
        type: Number,
        required: [true, 'please enter the correct product stock'],
        maxLenght: [6, 'product stock cannot exceed 6 numbers'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        required: true
    },
    reviews: [
      {
          name: {
              type: String,
              required: true
          },
          rating: {
              type: Number,
              required: true
          },
          comment: {
              type: String,
              required: true
          }
      }
    ],
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema);