const http = require('http');
const fs = require('fs');
const indexHtml = fs.readFileSync('./src/index.html');
const aboutHtml = fs.readFileSync('./src/about.html');

const ROUTING = {
    '/': indexHtml,
    '/about': aboutHtml,
};

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((request, response) => {
   response.statusCode = 200;
   response.setHeader('Content-Type', 'text/html');
   response.end(ROUTING[request.url]);
});

server.listen(PORT, HOSTNAME, () => {
   console.log(`Uruchomiono server NodeJS jako: ${HOSTNAME} na porcie ${PORT}`);
});