const http = require('http');
const fs = require('fs');

// function rqListener(req, res) {
// }

// http.createServer(rqListener);

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="message" method="POST"><input type="text" name="message" /><input type="text" name="addMessage" /><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, err => {
                console.log('some some');
                console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from my Nodejs</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);