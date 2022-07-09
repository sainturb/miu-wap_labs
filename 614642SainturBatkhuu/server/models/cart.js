let cart = [];

const Product = require('../models/product');

module.exports = class Cart {

  static getCart(user) {
    return cart.filter(c => c.user === user);
  }

  static ifExist(user, prodId) {
    return cart.find(c => c.user === user && c.prodId === prodId);
  }

  static addToCart(user, prodId) {
    const item = this.ifExist(user, prodId);
    const product = Product.findById(prodId);
    if (product.stock === 0) {
      throw new Error('Stock limit is exceeded');
    }
    if (item) {
      throw new Error('Already added item');
    }
    cart.push({
      user,
      prodId: product.prodId,
      name: product.name,
      quantity: 1,
      price: product.price,
      total: product.price * 1
    })
    return cart.filter(c => c.user === user);
  }

  static removeFromCart(user, prodId) {
    const item = this.ifExist(user, prodId);
    if (item) {
      cart.splice(cart.indexOf(item), 1);
      return cart.filter(c => c.user === user);
    } else {
      throw new Error('No such item');
    }
  }

  static deleteFromCart(user, prodId) {
    const item = this.ifExist(user, prodId);
    if (item) {
      cart.splice(cart.indexOf(item), 1);
    } else {
      throw new Error('No such item');
    }
  }

  static addQuantity(user, prodId) {
    const product = Product.findById(prodId);
    const i = cart.findIndex(c => c.user === user && c.prodId === prodId);
    if (i === -1) {
      throw new Error('No such item');
    }
    if (cart[i].quantity < product.stock) {
      cart[i].quantity++;
      cart[i].total = cart[i].price * cart[i].quantity;
      return cart.filter(c => c.user === user);
    } else {
      throw new Error('Stock limit is exceeded');
    }
  }

  static minusQuantity(user, prodId) {
    const i = cart.findIndex(c => c.user === user && c.prodId === prodId);
     if (i === -1) {
      throw new Error('No such item');
    }
    if (cart[i].quantity > 1) {
      cart[i].quantity--;
      cart[i].total = cart[i].price * cart[i].quantity;
    } else if (cart[i].quantity === 1) {
      this.removeFromCart(user, prodId);
    }
    return cart.filter(c => c.user === user);
  }
}