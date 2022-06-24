function sum(arr) {
  return arr.filter(item => item > 20)
            .reduce((a, b) => a + b, 0);
}

function setValue(id, val) {
  const element = document.getElementById(id);
  element.innerText = val.toString();
}

const total = sum([20, 21, 2, 25]);
console.log(total);
setValue('exercise1', total);

function getNewArray(arr) {
  return arr.filter(item => item.length >= 5)
            .filter(item => item.includes('a'));
}

const newArr = getNewArray(['Something', 'Planet', 'Saintur', 'Welcome', 'Along'])
console.log(newArr);
setValue('exercise2', newArr);