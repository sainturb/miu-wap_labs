function makeArmy() {
  let shooters = [];
  // let i = 0;
  // while(i < 2) {
    for(let i = 0; i<2; i++) {
    let shooter = function() {
      console.log(i);
    }
    shooters.push(shooter);
    // i++;
  }
  return shooters;
}
let army = makeArmy();

army.forEach(a => a());
