const mongoose = require("mongoose")


const ImageSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    image:{type:String},
    imgname:{type:String},
    

})

module.exports = mongoose.model('image', ImageSchema)