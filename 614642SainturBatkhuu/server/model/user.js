let users = [{
  id: 1,
  username: 'esaintor',
  firstname: 'Saintur',
  lastname: 'Batkhuu',
  password: '123456789'
}, {
  id: 2,
  username: 'tester',
  firstname: 'Test',
  lastname: 'User',
  password: '987654321'
}];
let tokens = {};

module.exports = class User {

  constructor(id, username, password, firstname, lastname) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  static generateId() {
    const min = Math.ceil(1);
    const max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  // insert one
  save() {
    this.id = this.generateId().toString();
    users.push(this);
    return this;
  }

  // update one
  update() {
    const index = users.findIndex(b => b.id === this.id);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      users[index] = this;
      return this;
    }
  }

  // get all
  static fetchAll() {
    return users;
  }

  // get by id
  static findById(id) {
    const index = users.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      return users[index];
    }
  }

  // delete on
  static deleteById(id) {
    const index = users.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Not Found');
    } else {
      users.splice(index, 1);
    }
  }

  static generateToken() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 32; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  static login(username, password) {
    const foundUsers = users.filter(b => b.username === username);
    if (foundUsers.length === 0) {
      throw new Error(`User doesn't exist`);
    }
    const found = foundUsers.find(u => u.password === password);
    if (found) {
      const token = this.generateToken();
      tokens[token] = found; // add token
      return token;
    } else {
      throw new Error(`Password doesn't match`);
    }
  }

  static logout(token) {
    delete tokens[token]; // remove token
  }

  static populate(token) {
    if (tokens[token]) {
      return tokens[token]; // get token user
    } else {
      throw new Error(`Access denied`);
    }
  }
}