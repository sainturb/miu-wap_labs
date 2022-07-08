const express = require('express');
const path = require('path');
const productRouter = require('./products/router')
const userRouter = require('./users/router')
// app variables
const app = express();
const port = process.env.PORT || 3000
// app setup
app.set('port', port);
app.set('env', 'development');
app.enable('case sensitive routing');
// app use
app.use(express.json());
app.all('/api/*', requireAuthentication);
app.use('/assets', express.static(path.join(__dirname, 'public', 'images')));
app.use((req, res, next) => next()); // always there to run
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use((req, res, next) => res.status(404).send('404'));
app.use((err, req, res, next) => {
  if (err.message === 'Unauthorized') {
    res.status(401).json({ error: err.message });
  } else if (err.message === 'Not Found') {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Something is wrong! Try later' });
  }
});
// app listen
app.listen(port, () => { console.log('listening on ' + port) });

function requireAuthentication (req, res, next) {
  if (req.headers.authorization) {
    next();
  } else {
    throw new Error('Unauthorized')
  }
}