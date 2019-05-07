// Root file
// Server file of node app
// Server will run from here
const http = require('http');

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

app.use( (req, res, next) => {
    console.log('In another middleware Now!!!');

    // Send  allows us to send a response
    // Automatically sets content-type HTML
    res.send('<h1>Hello From Express!!</h1>');
});

// app also happens to be a valid request handler
const server = http.createServer(app);

server.listen(3000);

 

