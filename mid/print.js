const user1 = {
  firstname: 'Joe',
  sayHi: function(val) {
    console.log(`Answer 5: ${val} ${this.firstname}`);
  }
}

function foo() {
  const printName = user1.sayHi;
  printName();
}

foo();

// setTimeout(() => user1.sayHi('Hi').apply(user1), 2000);
setTimeout(user1.sayHi.bind(user1), 2000, 'Hi');