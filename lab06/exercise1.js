function makeArmy() {
  let shooters = [];
  let i = 0;
  while(i < 2) {
    const shooter = function() {
      alert(i);
    }
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
// console.log(army[0]());