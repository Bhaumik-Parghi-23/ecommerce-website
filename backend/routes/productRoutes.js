const express = require('express');

const {getProducts, addProduct, deleteProduct, getFeaturedProducts, getElectronicProducts, getFashionProducts, getHomeProducts, getBooksProducts, getGamesProducts} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/electronics', getElectronicProducts);
router.get('/fashion', getFashionProducts);
router.get('/home', getHomeProducts);
router.get('/books', getBooksProducts);
router.get('/games', getGamesProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);

module.exports = router;