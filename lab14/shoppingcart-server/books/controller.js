const Book = require('./book');

exports.all = (req, res, next) => {
  res.status(200).json(Book.fetchAll());
}

exports.get = (req, res, next) => {
  res.status(200).json(Book.findById(req.params.id));
}

exports.save = (req, res, next) => {
  console.log(req.body);
  const saved = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
  res.status(201).json(saved);
}

exports.update = (req, res, next) => {
  const updated = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).update();
  res.status(201).json(updated);
}

exports.delete = (req, res, next) => {
  Book.deleteById(req.params.id);
  res.status(200).end();
}