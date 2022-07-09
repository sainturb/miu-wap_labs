const User = require('../model/user');

exports.all = (req, res, next) => {
  res.status(200).json(User.fetchAll());
}

exports.get = (req, res, next) => {
  res.status(200).json(User.findById(req.params.id));
}

exports.save = (req, res, next) => {
  const saved = new User(null, req.body.username, req.body.password, req.body.firstname, req.body.lastname).save();
  res.status(201).json(saved);
}

exports.update = (req, res, next) => {
  const updated = new User(req.params.id, req.body.username, req.body.password, req.body.firstname, req.body.lastname).update();
  res.status(201).json(updated);
}

exports.delete = (req, res, next) => {
  User.deleteById(req.params.id);
  res.status(200).end();
}

exports.login = (req, res, next) => {
  const token = {token: User.login(req.body.username, req.body.password)};
  res.status(200).json(token);
}

exports.logout = (req, res, next) => {
  User.login(req.headers.authorization);
  res.status(200).end();
}

exports.populate = (req, res, next) => {
  res.status(200).json(User.populate(req.headers.authorization));
}