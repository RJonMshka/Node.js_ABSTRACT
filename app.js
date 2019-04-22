// Root file
// Server file of node app
// Server will run from here
const http = require('http');
const routes = require('./routes');

// http.createServer return a Server
const server = http.createServer(routes.handler);

server.listen(3000);

 

