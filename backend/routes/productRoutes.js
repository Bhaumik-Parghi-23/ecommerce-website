const express = require('express');

const {getProducts, addProduct, deleteProduct, getFeaturedProducts} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);

module.exports = router;