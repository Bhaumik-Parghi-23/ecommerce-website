const express = require('express');

const {getProducts, addProduct, deleteProduct, getFeaturedProducts, getElectronicProducts} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/electronics', getElectronicProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);

module.exports = router;