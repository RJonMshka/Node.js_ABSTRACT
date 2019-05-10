const path = require('path');

const express = require('express');

// Express Router
// Its like a mini-express app tied to other express app (plugable)
const router = express.Router();

router.get('/', (req, res, next) => {
    // Wrong path as this absolute path reflects path of system directory(OS)
    // To solve this we use core module of node.js called "path"
    // res.sendFile('/views/shop.html');

    // We use path.join()
    // It return a path made out of different segments
    // We will use first segment as "__dirname" which is a global variable available to us by Node.js
    // __dirname gives us an absolute path from OS root to this project folder
    // Works in both linux systems and windows systems 
    res.sendFile(path.join(__dirname, '..','views', 'shop.html'));
});

module.exports = router;