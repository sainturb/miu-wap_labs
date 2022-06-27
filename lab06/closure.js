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
// setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}

document.getElementById('step1').addEventListener("click", () => {
  const stacks = document.getElementById(`stacks`);
  stacks.classList.remove('showStep2');
  stacks.classList.remove('showStep3');
  stacks.classList.remove('showStep4');
  stacks.classList.remove('showStep5');
  stacks.classList.add('showStep1');
});
document.getElementById('step2').addEventListener("click", () => {
  const stacks = document.getElementById(`stacks`);
  stacks.classList.remove('showStep1');
  stacks.classList.remove('showStep3');
  stacks.classList.remove('showStep4');
  stacks.classList.remove('showStep5');
  stacks.classList.add('showStep2');
});
document.getElementById('step3').addEventListener("click", () => {
  const stacks = document.getElementById(`stacks`);
  stacks.classList.remove('showStep1');
  stacks.classList.remove('showStep2');
  stacks.classList.remove('showStep4');
  stacks.classList.remove('showStep5');
  stacks.classList.add('showStep3');
});
document.getElementById('step4').addEventListener("click", () => {
  const stacks = document.getElementById(`stacks`);
  stacks.classList.remove('showStep1');
  stacks.classList.remove('showStep2');
  stacks.classList.remove('showStep3');
  stacks.classList.remove('showStep5');
  stacks.classList.add('showStep4');
});
document.getElementById('step5').addEventListener("click", () => {
  const stacks = document.getElementById(`stacks`);
  stacks.classList.remove('showStep1');
  stacks.classList.remove('showStep2');
  stacks.classList.remove('showStep3');
  stacks.classList.remove('showStep4');
  stacks.classList.add('showStep5');
});