const students = [
  { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
  { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
  { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

students.filter(s => s.courses.includes('cs303')).map(s => {
  const body = {};
  body[s.name] = s.grades.reduce((a, b) => a + b) / s.grades.length;
  return body;
}).reduce((result, item) => Object.assign(item, result),{});

students.filter(s => s.courses.includes('cs303')).reduce((result, item) => {
  result[s.name] = s.grades.reduce((a, b) => a + b) / s.grades.length;
  return result;
}, {});

students.filter(s => s.courses.includes('cs303')).map(s => {
  s.avg = s.grades.reduce((a, b) => a + b) / s.grades.length;
  return s;
}).reduce(
  (result, item, index, arr) => {
    result[item.name] = item.avg;
    return result;
  },
  {}
);

function b() {
  console.log('before x=10', x);
  const x = 10;
  console.log('after x=10', x);
  a(50);
  function a(x) {
    console.log(x);
  }
  console.log('after function a', x);
}
var x = 20;
console.log('before x=20', x);
b();
console.log('after function b', x);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
console.log('factorial', factorial(3));

const ipaddressregex = '((2([0-4]\d|5[0-5])|(1[0-9]{2})|([1-9]\d)|(\d))\.){3}(2([0-4]\d|5[0-5])|(1[0-9]{2})|([1-9]\d)|(\d))';

const array = [1, 2, 3];
const [item1, , item3] = array;
console.log(item1, item3);