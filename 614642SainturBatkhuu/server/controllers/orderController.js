const Order = require('../models/order');

exports.all = (req, res, next) => {
  res.status(200).json(Order.fetchAll(req.query.user));
}

exports.placeOrder = (req, res, next) => {
  res.status(200).json(Order.placeOrder(req.query.user));
}