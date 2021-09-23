const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;
console.log('proces', process.env);

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Uruchomiono server NodeJS jako: ${HOSTNAME} na porcie ${PORT}`);
});