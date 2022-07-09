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
    if (item) {
      throw new Error('Already added item');
    } else {
      Product.reduceStock(prodId);
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
  }

  static removeFromCart(user, prodId) {
    const item = this.ifExist(user, prodId);
    if (item) {
      Product.increaseStock(prodId, item.quantity);
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
    const i = cart.findIndex(c => c.user === user && c.prodId === prodId);
    // it will assume it exists because add button only available when item is in the cart
    Product.reduceStock(prodId);
    cart[i].quantity++;
    cart[i].total = cart[i].price * cart[i].quantity;
    return cart.filter(c => c.user === user);
  }

  static minusQuantity(user, prodId) {
    const i = cart.findIndex(c => c.user === user && c.prodId === prodId);
    // it will assume it exists because minus button only available when item is in the cart
    if (cart[i].quantity > 1) {
      Product.increaseStock(prodId, 1)
      cart[i].quantity--;
      cart[i].total = cart[i].price * cart[i].quantity;
    } else if (cart[i].quantity === 1) {
      this.removeFromCart(user, prodId);
    }
    return cart.filter(c => c.user === user);
  }
}