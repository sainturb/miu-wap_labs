const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('dog.jpeg', (err, data) => {
    if (err) throw err;
    res.end(data)
  });
 
});

server.listen(3000);