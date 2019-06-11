

const express = require('express');
const path = require('path');

// Now you create an express application and store it in a variable by calling express as a function
const app = express();

// We can set express configurations by using app.set (docs)
app.set('view engine', 'ejs');

// Have to tell where are our views located (i.e. views folder), "views" by default
app.set('views', 'views');


const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const  shopRouter = require('./routes/shop');

// Body parser for forms
app.use(bodyParser.urlencoded({extended: false}));

// To Serve static files (Read Only)
// It tries to find any request needing a file (.js, .css or any file) and redirect it to public folder
// We can add multiple static paths, request will funnel throiugh them unless it founds its first hit
app.use(express.static(path.join(__dirname, 'public')));

// USe admin Router
// Filter admin requests
app.use('/admin', adminData.routes);

// Use Shop Router
app.use(shopRouter); 

app.use((req, res, next) => {
    // Can chain methods like below
    res.status(404).render('404', {pageHeading: "Page Not Found !!!!!!!!", pageTitle: "Page Not Found"})
});

// Starting & Listening to the server
app.listen(3000);
 

