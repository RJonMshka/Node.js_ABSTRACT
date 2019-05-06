// Root file
// Server file of node app
// Server will run from here
const http = require('http');

const express = require('express');

// Now you create an express application and store it in a variable by calling express as a function
const app = express();

// app also happens to be a valid request handler
const server = http.createServer(app);

server.listen(3000);

 

