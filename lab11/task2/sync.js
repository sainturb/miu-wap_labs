const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const data = fs.readFileSync('dog.jpeg');
  res.end(data)
});

server.listen(3000);