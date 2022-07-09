let books = [];

module.exports = class Book {

  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  generateId() {
    const min = Math.ceil(1);
    const max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  // insert one
  save() {
    this.id = this.generateId().toString();
    books.push(this);
    return this;
  }

  // update one
  update() {
    const index = books.findIndex(b => b.id === this.id);
    if (index ===  -1) {
      throw new Error('Not Found');
    } else {
      books[index] = this;
      return this;
    }
  }

  // get all
  static fetchAll() {
    return books;
  }

  // get by id
  static findById(id) {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      return books[index];
    }
  }

  // delete on
  static deleteById(id) {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      books.splice(index, 1);
    }
  }
}