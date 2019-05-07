

const express = require('express');

// Now you create an express application and store it in a variable by calling express as a function
const app = express();
const bodyParser = require('body-parser');

// Body parser for forms
app.use(bodyParser.urlencoded({extended: false}));

app.use( (req, res, next) => {
    console.log('In the middleware Now!!!');
    next(); 
});

app.use('/add', (req, res, next) => {
    res.send('<form action="/users" method="POST"><input type="text" name="username"/><button type="submit">ADD ME</button></form>');
});

app.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello From Express!!</h1>');
});

// Starting & Listening to the server
app.listen(3000);
 

