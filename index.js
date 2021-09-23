const http = require('http');
const moment = require('moment');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

console.log(moment().format('dddd'));

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(moment().format('dddd'));
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Uruchomiono server NodeJS jako: ${HOSTNAME} na porcie ${PORT}`);
});