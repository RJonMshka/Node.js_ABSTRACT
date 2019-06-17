const express = require('express');

const productController = require('../controllers/products');
// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;