const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
      
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true,
        validate: [validator.isEmail, "please enter valid email."]
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        minLenght: [6, "Password must be longer than 6 character"],
        
    },
    avatar: {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    CreateAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date


})

// encrypting password
UserSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model('user', UserSchema)