let users = [{
  id: '1',
  username: 'esaintor',
  firstname: 'Saintur',
  lastname: 'Batkhuu',
  password: '123456789'
}, {
  id: '2',
  username: 'tester',
  firstname: 'Test',
  lastname: 'User',
  password: '1234'
}, {
  id: '3',
  username: 'user',
  firstname: 'John',
  lastname: 'Doe',
  password: '1234'
}];
module.exports = class User {

  constructor(id, username, password, firstname, lastname) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  generateId() {
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

  static generateToken(username) {
    var date = new Date().toISOString();
    var result = `${username}|${date}`;
    const buf = Buffer.from(result, 'utf-8');
    return buf.toString('base64');
  }

  static login(username, password) {
    const foundUsers = users.filter(b => b.username === username);
    if (foundUsers.length === 0) {
      throw new Error(`User doesn't exist`);
    }
    const found = foundUsers.find(u => u.password === password);
    if (found) {
      return this.generateToken(username);;
    } else {
      throw new Error(`Password doesn't match`);
    }
  }

  static populate(token) {
    try {
      const buf = Buffer.from(token, 'base64');
      const str = buf.toString('utf-8');
      const username = str.split('|')[0];
      const user = users.find(u => u.username === username)
      if (user) {
        return user;
      } else {
        throw new Error(`Access denied`);
      }
      
    } catch (error) {
      throw new Error(`Access denied`);
    }
  }
}