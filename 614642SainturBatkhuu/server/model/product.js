let products = [{
  prodId: 100001,
  name: 'NodeJS',
  image: '/assets/node.png',
  stock: 10,
  price: 9.99
}, {
  prodId: 100002,
  name: 'Angular',
  image: '/assets/angular.png',
  stock: 20,
  price: 19.99
}, {
  prodId: 100003,
  name: 'VueJS',
  image: '/assets/vue.png',
  stock: 4,
  price: 29.99
}, {
  prodId: 100004,
  name: 'ReactJS',
  image: '/assets/react.png',
  stock: 15,
  price: 39.99
}];
let cart = [];
let orders = [];

module.exports = class Product {

  constructor(prodId, name, image, stock, price) {
    this.prodId = prodId;
    this.name = name;
    this.image = image;
    this.stock = stock;
    this.price = price;
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

  static userCart(user) {
    return cart.filter(c => c.user === user);
  }

  static addToCart(user) {
    if (this.stock > 0) {
      this.stock--;
      update();
      cart.push({
        user,
        prodId: this.prodId,
        name: this.name,
        quantity: 1,
        price: this.price,
        total: this.price * 1
      });
      return userCart(user);
    } else {
      throw new Error('Unavailable stock');
    }
  }

  static removeFromCart(user) {
    const item = cart.find(c => c.user === user && c.prodId === this.prodId);
    // it will assume it exists because remove button only available when item is in the cart
    this.stock += item.quantity;
    update();
    cart.splice(cart.indexOf(item), 1);
    return userCart(user);
  }

  static addQuantity(user) {
    const i = cart.findIndex(c => c.user === user && c.prodId === this.prodId);
    // it will assume it exists because add button only available when item is in the cart
    if (this.stock > 0) {
      this.stock--;
      update();
      cart[i].quantity++;
      cart[i].total = cart[i].price * cart[i].quantity;
      return userCart(user);
    } else {
      throw new Error('Unavailable stock');
    }
  }

  static minusQuantity(user) {
    const i = cart.findIndex(c => c.user === user && c.prodId === this.prodId);
     // it will assume it exists because minus button only available when item is in the cart
    if (cart[i].quantity > 1) {
      this.stock++;
      update();
      cart[i].quantity--;
      cart[i].total = cart[i].price * cart[i].quantity;
      return userCart(user); 
    } else if (cart[i].quantity === 1) {
      this.stock++;
      update();
      this.removeFromCart(user);
      return userCart(user);
    } else {
      return userCart(user);
    }
  }

  static placeOrder(user) {
    const cartItems = JSON.parse(JSON.stringify(userCart(user)));
    cartItems.forEach(item => {
      cart.splice(cart.findIndex(c => c.user === user && c.prodId === item.prodId), 1); // remove from cart
      orders.push({...item, orderedDate: new Date()}); // add it to orders
    });
    return userCart(user);
  }

}