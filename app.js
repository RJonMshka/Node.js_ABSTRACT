

const express = require('express');

// Now you create an express application and store it in a variable by calling express as a function
const app = express();

// To use middleware, we use method USE of app
// It accepts array of request handlers
// Can pass a function here, which will execute for every request

// It will receive 3 ARGS
// REQ -> req with extra features
// RES -> res with extra features
// NEXT -> a function, passed to this handler by express js
// It has to be executed to allow req to move on or transfer to the next middleware
app.use( (req, res, next) => {
    console.log('In the middleware Now!!!');
    next(); // Allows request tocontinue to the next middleware in line
});

app.use('/add', (req, res, next) => {
    res.send('<h1>Add product Page</h1>');
});

// Path does n't mean full path but the start of the path of our request
// So '/' path matches all requests, as all requests will have / at beginning
app.use('/', (req, res, next) => {
    console.log('In another middleware Now!!!');
    // Can set header manuaaly as well and override the default express header setting

    // Send  allows us to send a response
    // Automatically sets content-type HTML 
    res.send('<h1>Hello From Express!!</h1>');
});

// Starting & Listening to the server
app.listen(3000);
 

