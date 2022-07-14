console.log('start');

const result = new Promise((reject, resolve) => {
  console.log(1)
  setTimeout(() => reject('whoops'), 1000);
  console.log(2)
}).then(res => res)
.catch(error => console.log('error happens'));

console.log(result.then(console.log));
console.log('end')