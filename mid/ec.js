let x = 1;
let y = 2;
function a(m) {
  if (m) {
    x = 2;
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