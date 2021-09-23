var http = require('http');

const add = (a,b) => a+b;
const result = String(add(10,4));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(result);
}).listen(3000);