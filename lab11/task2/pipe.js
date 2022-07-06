const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const read = fs.createReadStream('dog.jpeg');
  read.pipe(res);
})

server.listen(3000);