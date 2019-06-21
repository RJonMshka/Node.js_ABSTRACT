const express = require('express');

const shopController = require('../controllers/shop');
// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;