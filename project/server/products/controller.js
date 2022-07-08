const Product = require('./product');

exports.all = (req, res, next) => {
  res.status(200).json(Product.fetchAll());
}

exports.get = (req, res, next) => {
  res.status(200).json(Product.findById(req.params.prodId));
}

exports.save = (req, res, next) => {
  const saved = new Product(null, req.body.name, req.body.price, req.body.image).save();
  res.status(201).json(saved);
}

exports.update = (req, res, next) => {
  const updated = new Product(req.params.prodId, req.body.name, req.body.price, req.body.image).update();
  res.status(201).json(updated);
}

exports.delete = (req, res, next) => {
  Product.deleteById(req.params.prodId);
  res.status(200).end();
}

exports.addItem = (req, res, next) => {
  const updatedCart = Product.addToCart(req.params.prodId, req.params.user);
  res.status(200).json(updatedCart);
}

exports.removeItem = (req, res, next) => {
  const updatedCart = Product.removeFromCart(req.params.prodId, req.params.user);
  res.status(200).json(updatedCart);
}

exports.addQuantity = (req, res, next) => {
  const updatedCart = Product.addQuantity(req.params.prodId, req.params.user);
  res.status(200).json(updatedCart);
}

exports.minusQuantity = (req, res, next) => {
  const updatedCart = Product.minusQuantity(req.params.prodId, req.params.user);
  res.status(200).json(updatedCart);
}