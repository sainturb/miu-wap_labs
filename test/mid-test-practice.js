// const students = [
//   { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
//   { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
//   { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
//   { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
//   { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
// ];

// students.filter(s => s.courses.includes('cs303')).map(s => {
//   const body = {};
//   body[s.name] = s.grades.reduce((a, b) => a + b) / s.grades.length;
//   return body;
// }).reduce((result, item) => Object.assign(item, result),{});

// students.filter(s => s.courses.includes('cs303')).reduce((result, s) => {
//   result[s.name] = s.grades.reduce((a, b) => a + b) / s.grades.length;
//   return result;
// }, {});

// students.filter(s => s.courses.includes('cs303')).map(s => {
//   s.avg = s.grades.reduce((a, b) => a + b) / s.grades.length;
//   return s;
// }).reduce(
//   (result, item, index, arr) => {
//     result[item.name] = item.avg;
//     return result;
//   },
//   {}
// );

// function b() {
//   console.log('before x=10', x);
//   const x = 10;
//   console.log('after x=10', x);
//   a(50);
//   function a(x) {
//     console.log(x);
//   }
//   console.log('after function a', x);
// }
// var x = 20;
// console.log('before x=20', x);
// b();
// console.log('after function b', x);

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
// console.log('factorial', factorial(3));

// const ipaddressregex = '((2([0-4]\d|5[0-5])|(1[0-9]{2})|([1-9]\d)|(\d))\.){3}(2([0-4]\d|5[0-5])|(1[0-9]{2})|([1-9]\d)|(\d))';

// const array = [1, 2, 3];
// const [item1, , item3] = array;
// console.log(item1, item3);

// const x = 10;
// function b() {
//   let x = 1;
//   function a(x) {
//     let y = 3;
//     x = 20;
//   }
//   return a;
// }
// let a = function (x) {
//   console.log(x);
// }
// const g = b(1);
// g(10);

x = 1;
var a = 5;
var b = 10;
console.log(x, a, b)
var c = function (a, b, c) {
  var f = function () {
    b = a; // undefined
    var a = 3;
  }
  f();
  console.log(b);
}
c(8, 9, 7); 

// var x = 2;
// let y = 3;
// function foo(m) {
//   var a = 10;
//   let b = 8;
//   const c = 7;
//   function bar() {

//   }
// }
// foo(1)

// let m = 1;
// console.log('global m', m);
// function foo(flag) {
//   if (flag) {
//     let m = flag;
//     console.log('flag m', m);
//     m++;
//     console.log('added m', m);
//   }
// }
// foo(1);
// console.log('global m after', m);

const unicodeRegex = '\\u{[0-9A-F]{1,6}}';

function User(name, lastname) {
  name = name;
  lastname = lastname
  func = function() {
    console.log('log');
  }
}

User.prototype.setName = function(name) {
  this.name = name;
}

const user = new User("name", "lastname");

const tom = Object.create(user);
tom.setLastname = function (name) {
  this.lastname = name;
} 
tom.setName('tom');
tom.setLastname('new lastname');
console.log(tom)

const student =  {
  name: "Name1",
  grades: [10, 22, 134]
}

console.log(student.grades.reduce((a,b,i,all) => a + b)/student.grades.length);