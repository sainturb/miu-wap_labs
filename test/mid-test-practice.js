const students = [
  { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
  { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
  { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

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