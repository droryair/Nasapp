const mongoose = require('mongoose')

const Schema = mongoose.Schema
const favoriteSchema  = new Schema({
    title :String,
    img:String,
    explanation:String
})

const Favorite = mongoose.model('favorite', favoriteSchema)
module.exports = Favorite