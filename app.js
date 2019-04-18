// Root file
// Server file of node app
// Server will run from here
const http = require('http');
// FS allows us to work with the file system
const fs = require('fs');

// http.createServer return a Server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
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
    if(url === '/message' && method === 'POST') {
        // writeFileSync takes 1st arg as Path to the file, 2nd arg as data to be stored in that file
        fs.writeFileSync('message.txt','DUMMY');
        // res.writeHead allows us to write some meta info in one go. 1st arg is statusCode and other is an object with key value pair signifying headers you want to send in response object
        // res.writeHead(302, {});

        // OR you can break it down like this
        res.statusCode = 302;
        // 302 is for REDIRECTION
        res.setHeader('Location', '/');
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

 

