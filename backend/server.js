require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
// const dotenv = require("dotenv");

// Database Connection
const connectDB = require('./config/db');

// Calling Routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Serving public folder
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});