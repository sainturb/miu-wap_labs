let x = 1;
let y = 2;
function a(m) {
  if (m) {
    var n = m;
    x++;
  }
}
const b = function() {
  let x = 3;
  a();
  const foo = function(z) {
    return x + y + z;
  }
  foo(3);
}

const f = b(2);
f(5);

// Question 1 (3 points)
// 2 position
// Question 2 (5 points)
// 5 color
// Question 3 (4 points)
// 3.75 regex { -> \{
// Question 4 (5 points)
// 5 filter and map and reduce
// Question 5 (7 points)
// 4.5 (missing var n, )
// Question 6 (6 points)
// 2.5 (apply bind)
// Question 7 (10 points)
// 7.5 (fname, lname will not effect)
// Total (40 points)
// 30.25
// Average grade of the class
// 33.88