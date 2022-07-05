const fs = require('fs');
const path = require('path');

const rd = fs.createReadStream(path.join(__dirname, 'dog.jpeg'));
const wr = fs.createWriteStream(path.join(__dirname, 'newDog.jpeg'));

rd.pipe(wr)