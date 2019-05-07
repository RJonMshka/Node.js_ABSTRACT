const express = require('express');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

// /admin/add-products => GET
router.get('/add-products', (req, res, next) => {
    res.send('<form action="/admin/add-products" method="POST"><input type="text" name="username"/><button type="submit">ADD ME</button></form>');
});

// /admin/add-products => POST
router.post('/add-products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;