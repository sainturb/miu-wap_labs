let orders = [];
module.exports = class Order {
  static placeOrder(user) {
    const cartItems = JSON.parse(JSON.stringify(userCart(user)));
    cartItems.forEach(item => {
      cart.splice(cart.findIndex(c => c.user === user && c.prodId === item.prodId), 1); // remove from cart
      orders.push({ ...item, orderedDate: new Date() }); // add it to orders
    });
    return cart.filter(c => c.user === user);
  }
}
