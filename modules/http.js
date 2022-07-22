const http = require('http');

const port = 8080;

const server    = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World</h1>');
    }
    else if (req.url === '/users') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify([{name: 'Felipe'}, {name: 'João'}]));
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/home`);
});