const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewsSchema = new Schema({
    name:String,
    rating:Number,
    text:String,
    productId:String,
})


module.exports = mongoose.model('Review',reviewsSchema)













