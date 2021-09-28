const mongoose = require('mongoose')
const Schema = mongoose.Schema


const usersSchema = new Schema({
    name:String,
    surname:String,
})


module.exports = mongoose.model('Users',usersSchema)
