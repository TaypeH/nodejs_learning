const http = require('http');

// function rqListener(req, res) {
// }

// http.createServer(rqListener);

const server = http.createServer((req, res) => {
    console.log(req);
    console.log(req.url, req.method, req.headers);
    // process.exit();

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from my Nodejs</body>');
    res.write('</head>');
    res.end();
});

server.listen(3000);