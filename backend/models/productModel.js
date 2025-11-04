const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    price: {type:Number, required: true},
    image: {type:String}, // image url
    description: {type:String},
    stock: {type:Number, default: 0},
    category: {type:String},
    featured: {type:Boolean, default: false} // by default, product is not featured
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;