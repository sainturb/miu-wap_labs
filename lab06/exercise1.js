function makeArmy() {
  let shooters = [];
  let i = 0;
  while(i < 2) {
    const shooter = function() {
      console.log(i);
    }
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army.forEach(a => a());