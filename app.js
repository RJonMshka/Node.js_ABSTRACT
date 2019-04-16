// Root file
// Server file of node app
// Server will run from here

// Const as we will use it but will never redefined it
const http = require('http');

// Request listener receives 2 arguments
// 1. request of type "IncomingMessage"
// 2. response of type "ServerResponse"
// Node.js automatically gives us the incoming request as an object and response which we can use to send a response to whoever sent that request


// With anonymous function
http.createServer(function (req, res) {
    console.log(req);
});

