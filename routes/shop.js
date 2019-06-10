const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const adminData = require('./admin');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', (req, res, next) => {
    // We use res.render
    // No need to do .pug as we already specified in app that we are using pug for templating
    // Also no need to specify path as we already specified it in app.js
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: "Shop", path: "/"});
});

module.exports = router;