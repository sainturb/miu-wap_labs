const Product = require('../models/product');

exports.all = (req, res, next) => {
  res.status(200).json(Product.fetchAll());
}

exports.get = (req, res, next) => {
  res.status(200).json(Product.findById(req.params.prodId));
}

exports.save = (req, res, next) => {
  const saved = new Product(null, req.body.name, req.body.image,  req.body.stock, req.body.price).save();
  res.status(201).json(saved);
}

exports.update = (req, res, next) => {
  const updated = new Product(req.params.prodId, req.body.name, req.body.image, req.body.stock, req.body.price).update();
  res.status(201).json(updated);
}

exports.delete = (req, res, next) => {
  Product.deleteById(req.params.prodId);
  res.status(200).end();
}