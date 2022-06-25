function printNumbers(from, to) {
  'use strict';
  let interval = setInterval(() => {
    document.getElementById('exercise1').innerText = from;
    if (from == parseInt(to, 0) + 1) {
      document.getElementById('exercise1').innerText = 'Finished';
      clearInterval(interval);
    }
    from++;
  }, 1000);
}

document.getElementById('run1').addEventListener('click', () => {
  'use strict';
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  if (from < to) {
    printNumbers(from, to);
  } else {
    document.getElementById('exercise1').innerHTML = '<code>to</code> cannot be less than <code>from</code>';
  }
});

let i = 0;
setTimeout(() => alert(i), 100);
for(let j = 0; j < 100000000; j++) {
  i++;
}