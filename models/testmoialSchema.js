const mongoose = require('mongoose');

const testmonialSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    }
})

const testmonials = mongoose.model('testmonials',testmonialSchema)
module.exports = testmonials