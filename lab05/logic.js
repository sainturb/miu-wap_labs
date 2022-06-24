function sum(arr) {
  return arr.filter(item => item > 20)
            .reduce((a, b) => a + b, 0);
}

function setValue1(id, val, arr) {
  const passing = document.getElementById(id + 'passing');
  passing.innerHTML = `[${arr.map(i => {
    return i > 20 ? `<strong>${i}</strong>`: i;
  })}]`;
  const value = document.getElementById(id);
  value.innerText = val;
}

function setValue2(id, val, arr) {
  const passing = document.getElementById(id + 'passing');
  passing.innerHTML = `[${arr.map(i => {
    return i.length >= 5 && i.includes('a') ? `<strong>${i}</strong>` : i;
  })}]`;
  const value = document.getElementById(id);
  value.innerText = val;
}

const arr = [20, 21, 2, 25];
runExercise1(arr);

function getNewArray(arr) {
  return arr.filter(item => item.length >= 5)
            .filter(item => item.includes('a'));
}

const strArr = ['Something', 'Planet', 'Saintur', 'Welcome', 'Along'];
runExercise2(strArr);

function runExercise1(arr) {
  const total = sum(arr);
  setValue1('exercise1', parseInt(total, 0), arr);
}

function runExercise2(arr) {
  const newArr = getNewArray(arr);
  setValue2('exercise2', `[${newArr}]`, arr);
}

document.getElementById('run1').addEventListener('click', (event) => {
  const arr = document.getElementById('input1').value.replace(' ', '').split(',');
  runExercise1(arr);
});

document.getElementById('run2').addEventListener('click', () => {
  const arr = document.getElementById('input2').value.replace(' ', '').split(',');
  runExercise2(arr);
});

