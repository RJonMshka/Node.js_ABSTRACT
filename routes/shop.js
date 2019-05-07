const express = require('express');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello From Express!!</h1>');
});

module.exports = router;