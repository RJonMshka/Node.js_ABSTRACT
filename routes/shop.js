const express = require('express');

const shopController = require('../controllers/shop');
// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// Put more specific route first thn dynamic route (e.g. /products/delete)
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;