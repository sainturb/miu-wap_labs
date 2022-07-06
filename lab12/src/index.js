const express = require('express');
const path = require('path');
const productRouter = require('./products/product');
const userRouter = require('./users/user');

const app = express();
const port = process.env.PORT || 3000;
app.set('env', 'development');
app.set('port', port);
app.enable('case sensitive routing');

app.use('/design', express.static(path.join(__dirname, 'assets', 'style')));
app.use('/logic', express.static(path.join(__dirname, 'assets', 'js')));

app.use((req, res, next) => {
  console.log('This middleware always run!');
  next();
});

app.get('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Your Server is running on ' + port);
});

// error logger at level 1
function logErrors (err, req, res, next) {
  console.error('LOG: ', err.stack); 
  next(err);
}

// error handler at level 2, which is after log error
function errorHandler(err, req, res, next) { 
 res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
}