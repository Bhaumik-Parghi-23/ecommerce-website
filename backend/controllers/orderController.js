const Order = require('../models/orderModel');

const getOrders = async(req, res) => {
    try{
        const orders = await Order.find().populate("products.productId");
        res.json(orders);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const createOrder = async(req, res) => {
    try{
        const newOrder = new Order(req.body);
        const saved =  await newOrder.save();
        res.status(201).json(saved);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports = {getOrders, createOrder};