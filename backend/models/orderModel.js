const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName: {type:String, required:true},
    email: {type:String},
    address: {type:String, required:true},
    products: [
        {
            productId: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
            quantity: {type:Number, default:1}
        }
    ],
    totalAmount: {type:Number, required:true},
    date: {type:Date, default:Date.now()}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;