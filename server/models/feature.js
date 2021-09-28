const mongoose = require('mongoose')
const Schema = mongoose.Schema


const featureSchema = new Schema({
    name:String,
    value:String,
    productId:String,
})


module.exports = mongoose.model('Feature',featureSchema)













