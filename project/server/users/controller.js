const { findById } = require('./user');
const User = require('./user');

exports.all = (req, res, next) => {
  res.status(200).json(User.fetchAll());
}

exports.get = (req, res, next) => {
  res.status(200).json(User.findById(req.params.id));
}

exports.save = (req, res, next) => {
  const saved = new User(null, req.body.name, req.body.price, req.body.image).save();
  res.status(201).json(saved);
}

exports.update = (req, res, next) => {
  const updated = new User(req.params.id, req.body.name, req.body.price, req.body.image).update();
  res.status(201).json(updated);
}

exports.delete = (req, res, next) => {
  User.deleteById(req.params.id);
  res.status(200).end();
}

exports.login = (req, res, next) => {
  const token = {token: User.login(req.params.username, req.params.password)};
  res.status(200).json(token);
}

exports.logout = (req, res, next) => {
  User.login(req.params.token);
  res.status(200).end();
}

exports.populate = (req, res, next) => {
  res.status(200).json(User.populate(req.params.token));
}