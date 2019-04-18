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
        // Incoming data however is sent as a stream of data
        // Registering event listener for req data as node is event based
        const body = [];
        // This will be fired when chunks of data are sent from client
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // This will be fired when done parsing incoming request data or incoming request in general
        return req.on('end', () => {
            // Create a new buffer and add req chunks to it
            const parsedBody = Buffer.concat(body).toString();
            // toString is used as we know that we are sending string data from client
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];

            // writeFileSync takes 1st arg as Path to the file, 2nd arg as data to be stored in that file
            //fs.writeFileSync('message.txt', message);

            // Write file Sync is a blocking statement
            // to avoid it, we use fs.writeFile
            // It accepts path, data and a 3rd argument - callback (function which will be executed when writing to file is done)
            // This callback has error as 1st argument, which will be NULL if no error
            fs.writeFile('message.txt', message, (err) => {
                // Can do error handling on basis of error

                // res.writeHead allows us to write some meta info in one go. 1st arg is statusCode and other is an object with key value pair signifying headers you want to send in response object
                // res.writeHead(302, {});

                // OR you can break it down like this
                res.statusCode = 302;
                // 302 is for REDIRECTION
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>HAHA</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

 

