const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const products = [];

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: "Add Products", path: "/admin/add-product", activeAddProduct: true, productsCSS: true});
});

// /admin/add-products => POST
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;