const Product = require('../models/productModel');
// const products = [
//     { name: "Laptop", price: 80000},
//     { name: "Headphones", price: 2000}
// ]

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get featured products
const getFeaturedProducts = async (req, res) => {
    try {
        const featuredProducts = await Product.find({ featured: true }).limit(10);
        res.json(featuredProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get electronic products
const getElectronicProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: 'Electronics' });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get fashion products
const getFashionProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: { $in: ['Fashion', 'Footwear', 'Clothing'] } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get home products
const getHomeProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: { $in: ['Home Appliances', 'Home', 'Furniture'] } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get books products
const getBooksProducts = async (req, res) => {
    try{
        const products = await Product.find({ category: 'Books' });
        res.json(products);
    }catch(err){
        res.status(500).json({ message: err.message});
    }

}

// Get games products
const getGamesProducts = async(req, res) => {
    try{
        const products = await Product.find({category : 'Gaming'});
        res.json(products);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getProducts, addProduct, deleteProduct, getFeaturedProducts, getElectronicProducts, getFashionProducts, getHomeProducts, getBooksProducts, getGamesProducts };