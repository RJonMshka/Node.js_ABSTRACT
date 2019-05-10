

const express = require('express');
const path = require('path');

// Now you create an express application and store it in a variable by calling express as a function
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const  shopRouter = require('./routes/shop');

// Body parser for forms
app.use(bodyParser.urlencoded({extended: false}));

// To Serve static files (Read Only)
// It tries to find any request needing a file (.js, .css or any file) and redirect it to public folder
// We can add multiple static paths, request will funnel throiugh them unless it founds its first hit
app.use(express.static(path.join(__dirname, 'public')));

// USe admin Router
// Filter admin requests
app.use('/admin', adminRouter);

// Use Shop Router
app.use(shopRouter); 

app.use((req, res, next) => {
    // Can chain methods like below
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Starting & Listening to the server
app.listen(3000);
 

