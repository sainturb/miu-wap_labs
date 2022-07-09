const express = require('express');
const path = require('path');
const cors = require('cors');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const cartRouter = require('./routes/cartRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
// app variables
const app = express();
const port = process.env.PORT || 3000
var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}
// app setup
app.set('port', port);
app.set('env', 'development');
app.enable('case sensitive routing');
  // app use
app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => next()); // always there to run
app.use('/assets', express.static(path.join(__dirname, 'public', 'images')))
app.use('/auth', authRouter); // public api
app.all('/api/*', requireAuthentication);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/cart', cartRouter);
app.use('/api/users', userRouter);
app.use((req, res, next) => res.status(404).send('404'));
app.use((err, req, res, next) => {
  if (err.message === 'Unauthorized') {
    res.status(401).json({ error: err.message });
  } else if (err.message === 'Not Found') {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: err.message });
  }
});
// app listen
app.listen(port, () => { console.log('listening on ' + port) });
function requireAuthentication (req, res, next) {
  if (req.headers.authorization && isValidToken(req.headers.authorization)) {
    next();
  } else {
    throw new Error('Unauthorized')
  }
}

function isValidToken(token) {
  const buf = Buffer.from(token, 'base64');
  const str = buf.toString('utf-8');
  if (str.split('|').length !== 2) {
    return false;
  }
  try {
    const date = new Date(str.split('|')[1]);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    return (diff / (1000*60*60)) < 8 // check it is less then 8 hours
  } catch (e) {
    return false;
  }
}