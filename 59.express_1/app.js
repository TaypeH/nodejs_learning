// const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => { 
    console.log('always');
    next();
});

app.use('/add-product', (req, res, next) => { 
    console.log('in the product middleware');
    res.send('<h1>Hello product page</h1>');
});

app.use('/', (req, res, next) => { 
    console.log('in the middleware');
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
