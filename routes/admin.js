const express = require('express');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

const productsController = require('../controllers/products');

// /admin/add-products => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-products => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
