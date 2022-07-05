const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const data = fs.readFileSync('dog.jpeg');
  res.end(data)
});

server.listen(3000);