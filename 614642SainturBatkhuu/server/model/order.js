let orders = [];

const Cart = require('../model/cart');

module.exports = class Order {

  constructor() {

  }

  static generateId() {
    const min = Math.ceil(1);
    const max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  static fetchAll(user) {
    return orders.filter(o => o.user === user);
  }

  static placeOrder(user) {
    const cartItems = JSON.parse(JSON.stringify(Cart.getCart(user)));
    const orderNumber =  this.generateId().toString();
    const orderedDate = new Date();
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        Cart.deleteFromCart(user, item.prodId); // delete from cart without changin the stock
        orders.push({ ...item, id: this.generateId().toString(), orderedDate, orderNumber }); // add it to orders
      });
      return orders.filter(o => o.user === user);
    } else {
      throw new Error('empty cart');
    }
  }
}
