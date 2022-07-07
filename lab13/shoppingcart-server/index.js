const express = require('express');
const bookRouter = require('./books/router')

const app = express();

app.enable('case sensitive routing');
app.use(express.json());

app.use('/', (req, res, next) => next());

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