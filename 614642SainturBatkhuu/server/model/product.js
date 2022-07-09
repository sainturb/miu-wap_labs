let products = [{
  prodId: '100001',
  name: 'NodeJS',
  image: '/assets/node.png',
  stock: 10,
  price: 9.99
}, {
  prodId: '100002',
  name: 'Angular',
  image: '/assets/angular.png',
  stock: 20,
  price: 19.99
}, {
  prodId: '100003',
  name: 'VueJS',
  image: '/assets/vue.png',
  stock: 4,
  price: 29.99
}, {
  prodId: '100004',
  name: 'ReactJS',
  image: '/assets/react.png',
  stock: 15,
  price: 39.99
}];

module.exports = class Product {

  constructor(prodId, name, image, stock, price) {
    this.prodId = prodId;
    this.name = name;
    this.image = image;
    this.stock = stock;
    this.price = price;
  }

  static generateId() {
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
    const i = products.findIndex(b => b.prodId === this.prodId);
    if (i === -1) {
      throw new Error('Not Found');
    } else {
      products[i].name = this.name;
      products[i].image = this.image;
      products[i].stock = this.stock;
      products[i].price = this.price;
      return products[i];
    }
  }

  static reduceStock(prodId) {
    const i = products.findIndex(b => b.prodId === prodId);
    if (i === -1) {
      throw new Error('Not Found');
    } else {
      if (products[i].stock > 0) {
        products[i].stock--
      } else {
        throw new Error('Stock unavailable');
      }
    }
  }

  static increaseStock(prodId, quantity) {
    const i = products.findIndex(b => b.prodId === prodId);
    if (i === -1) {
      throw new Error('Not Found');
    } else {
      products[i].stock += quantity;
    }
  }

  // get all
  static fetchAll() {
    return products;
  }

  // get by prodId
  static findById(prodId) {
    const i = products.findIndex(b => b.prodId === prodId);
    if (i === -1) {
      throw new Error('Not Found');
    } else {
      return products[i];
    }
  }

  // delete on
  static deleteById(prodId) {
    const i = products.findIndex(b => b.prodId === prodId);
    if (i === -1) {
      throw new Error('Not Found');
    } else {
      products.splice(i, 1);
    }
  }
}