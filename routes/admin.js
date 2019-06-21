const express = require('express');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
