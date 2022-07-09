const express = require('express');
const path = require('path');
const cors = require('cors');
const bookRouter = require('./books/router')

const app = express();

app.enable('case sensitive routing');
app.use(cors({origin: '*'}))
app.use(express.json());

app.use('/design', express.static(path.join(__dirname, 'public', 'css')));
app.use('/script', express.static(path.join(__dirname, 'public', 'js')));

app.use((req, res, next) => next()); // always there to run
app.use('/books', bookRouter);

app.use((req, res, next) => {
  res.status(404).send('404');
});

app.use((err, req, res, next) => {
  if (err.message === 'Not Found') {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Something is wrong! Try later' });
  }
});

app.listen(3000, () => { });