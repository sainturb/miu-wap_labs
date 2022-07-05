function User(firstname, lastname) {
  firstname = firstname;
  lastname = lastname
  getFullName = function() {
    console.log(`${this.lastname} ${this.firstname}`);
  }
}
User.prototype.setFirstname = function(firstname) {
  this.firstname = firstname;
}
const user = new User("name", "lastname");
const tom = Object.create(user);
tom.setLastname = function (name) {
  this.lastname = name;
} 
tom.setFirstname('tom');
tom.setLastname('new lastname');
console.log('Answer for 7:')
console.log('user as functional contructor')
console.dir(user);
console.log('tom from user object literal')
console.dir(tom);