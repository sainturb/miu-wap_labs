let products = [];
let cart = [];

module.exports = class Item {

  constructor(prodId, name, quantity, price) {
    this.prodId = prodId;
    this.username = username;
    this.username = username;
    this.price = price;
    this.image = image;
  }

  generateId() {
    const min = Math.ceil(1);
    const max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  // insert one
  save() {
    this.prodId = this.generateId().toString();
    products.push(this);
    return this;
  }

  // update one
  update() {
    const index = products.findIndex(b => b.prodId === this.prodId);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      products[index] = this;
      return this;
    }
  }

  // get all
  static fetchAll() {
    return products;
  }

  // get by prodId
  static findById(prodId) {
    const index = products.findIndex(b => b.prodId === prodId);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      return products[index];
    }
  }

  // delete on
  static deleteById(prodId) {
    const index = products.findIndex(b => b.prodId === prodId);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      products.splice(index, 1);
    }
  }

  userCart() {
    return cart.filter(c => c.user === user);
  }

  static addToCart(prodId, user) {
    const index = products.findIndex(b => b.prodId === prodId);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      cart.push({ user, ...products[index] });
      return userCart();
    }
  }

  static removeFromCart(prodId, user) {
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      const cartIndex = cart.findIndex(c => c.user === user && c.prodId === prodId);
      if (cartIndex !== -1) {
        cart.splice(cartIndex, 1);
        return userCart();
      } else {
        throw new Error('Not Found');
      }
    }
  }

  static addQuantity(prodId, user) {
    const cartIndex = cart.findIndex(c => c.user === user && c.prodId === prodId);
    if (cartIndex === -1) {
      throw new Error('Not Found');
    } else {
      if (cart[cartIndex].quantity < 10) {
        cart[cartIndex].quantity++;
        return userCart();
      } else {
        throw new Error('cannot be more than 10');
      }
    }
  }

  static minusQuantity(prodId, user) {
    const cartIndex = cart.findIndex(c => c.user === user && c.prodId === prodId);
    if (cartIndex === -1) {
      throw new Error('Not Found');
    } else {
      if (cart[cartIndex].quantity > 0) {
        cart[cartIndex].quantity--;
        return userCart();
      } else {
        throw new Error('cannot be less than 0');
      }
    }
  }
}