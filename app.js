// Root file
// Server file of node app
// Server will run from here

// Const as we will use it but will never redefined it
const http = require('http');

// Request listener receives 2 arguments
// 1. request of type "IncomingMessage"
// 2. response of type "ServerResponse"
// Node.js automatically gives us the incoming request as an object and response which we can use to send a response to whoever sent that request


// http.createServer return a Server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // Res does not hold any important data
    // Instead we use it to fill it with data we wanna send back

    // Setting a new response header
    // We are telling the browser that we are sending content of type html (meta info)
    res.setHeader('Content-Type', 'text/html');

    // Now sending html data
    // res.write works in chunks
    res.write('<html>');
    res.write('<head><title>HAHA</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.write('</html>');

    // After we set all the headers and wrote all data to response body, we have to tell nodejs that we are done writing response data, now we want to send it to the browser back
    // We call end
    res.end();
    // After this if we write anything to res it will give us error as res is sent back to client
});

// Server has a bunch of methods to call, one of them is listen
// Listen starts a process when nodejs not immediately exit our script, but nodejs keeps it running to listen to incoming requests
// Listen takes optional arguments
// 1. port on which server will listen (On prod, we will typically not fill this out and it will take a default of 80), on dev, will give it a "number"
// 2. Hostname: string, by default it will be the name of machine it is running on , on local machine it is "localhost"
// Thousand ports are pretty safe
// It will have ongoing looping process that keeps the app running
// You can hit localhost:3000 on browser to check the request logged on to console
server.listen(3000);

 

