const express = require('express');
const path = require('path');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-products => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;