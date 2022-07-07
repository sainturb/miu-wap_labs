const express = require('express');
const path = require('path');
const bookRouter = require('./books/router')

const app = express();

app.enable('case sensitive routing');
app.use(express.json());

app.use('/design', express.static(path.join(__dirname, 'public', 'css')));
app.use('/script', express.static(path.join(__dirname, 'public', 'js')));

app.use((req, res, next) => next()); // always there to run
app.get('/', (req, res, next) => res.status(200).sendFile(path.join(__dirname, 'views', 'home.html'))); // initial page, delete page
app.get('/add', (req, res, next) => res.status(200).sendFile(path.join(__dirname, 'views', 'add.html'))); // add page
app.get('/update', (req, res, next) => res.status(200).sendFile(path.join(__dirname, 'views', 'update.html'))); // update page
app.get('/get', (req, res, next) => res.status(200).sendFile(path.join(__dirname, 'views', 'get.html'))); // get page
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