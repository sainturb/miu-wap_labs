function sum(arr) {
  return arr.filter(item => item > 20)
            .reduce((a, b) => a + b, 0);
}

function setValue1(total) {
  const element = document.getElementById('exercise1');
  element.innerText = total;
}

const total = sum([20, 21, 2, 25]);
console.log(total);
setValue1(total);

function getNewArray(arr) {
  return arr.filter(item => item.length >= 5)
            .filter(item => item.includes('a'));
}

function setValue2(arr) {
  const element = document.getElementById('exercise2');
  element.innerText = arr.toString();
}

const newArr = getNewArray(['Something', 'Planet', 'Saintur', 'Welcome', 'Along'])
console.log(newArr);
setValue2(newArr);