// Root file
// Server file of node app
// Server will run from here
const http = require('http');

// http.createServer return a Server
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // Get request is automatically sent when we click n any link or type any url in browser
        // POST request has to be created and setup by you
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // Return statement is added to return from anonymous function and do not run the below code
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>HAHA</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

 

