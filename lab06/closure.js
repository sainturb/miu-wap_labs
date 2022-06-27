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

document.getElementById('step1').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(1);
  stacks.className = 'showStep1 col-6'
});
document.getElementById('step2').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(2);
  stacks.className = 'showStep2 col-6';
});
document.getElementById('step3').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(3);
  stacks.className = 'showStep3 col-6';
});
document.getElementById('step4').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(4);
  stacks.className = 'showStep4 col-6';
});
document.getElementById('step5').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(5);
  stacks.className = 'showStep5 col-6';
});
document.getElementById('step6').addEventListener("click", (e) => {
  const stacks = document.getElementById(`stacks`);
  removeClassFromButtons(6);
  stacks.className = 'showStep6 col-6';
});

document.getElementById('forstep1').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(1);
  stacks.className = 'forshowStep1 col-6'
});
document.getElementById('forstep2').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(2);
  stacks.className = 'forshowStep2 col-6';
});
document.getElementById('forstep3').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(3);
  stacks.className = 'forshowStep3 col-6';
});
document.getElementById('forstep4').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(4);
  stacks.className = 'forshowStep4 col-6';
});
document.getElementById('forstep5').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(5);
  stacks.className = 'forshowStep5 col-6';
});
document.getElementById('forstep6').addEventListener("click", (e) => {
  const stacks = document.getElementById(`forstacks`);
  removeClassFromForButtons(6);
  stacks.className = 'forshowStep6 col-6';
});

function removeClassFromButtons(number) {
  for(var n = 1; n <= 6; n++) {
    if (n === number) {
      document.getElementById(`step${n}`).className = 'active';
    } else {
      document.getElementById(`step${n}`).removeAttribute('class');
    }
  }
}

function removeClassFromForButtons(number) {
  for(var n = 1; n <= 6; n++) {
    if (n === number) {
      document.getElementById(`forstep${n}`).className = 'active';
    } else {
      document.getElementById(`forstep${n}`).removeAttribute('class');
    }
  }
}