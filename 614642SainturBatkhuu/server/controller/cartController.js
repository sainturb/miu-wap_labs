// const Product = require('../model/product');
const Cart = require('../model/cart');

exports.cartItems = (req, res, next) => {
  res.status(200).json(Cart.getCart(req.query.user));
}

exports.addItem = (req, res, next) => {
  const updatedCart = Cart.addToCart(req.query.user, req.query.prodId);
  res.status(200).json(updatedCart);
}

exports.removeItem = (req, res, next) => {
  const updatedCart = Cart.removeFromCart(req.query.user, req.query.prodId);
  res.status(200).json(updatedCart);
}

exports.addQuantity = (req, res, next) => {
  const updatedCart = Cart.addQuantity(req.query.user, req.query.prodId);
  res.status(200).json(updatedCart);
}

exports.minusQuantity = (req, res, next) => {
  const updatedCart =Cart.minusQuantity(req.query.user, req.query.prodId);
  res.status(200).json(updatedCart);
}