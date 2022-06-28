// function makeArmy() {
//   let shooters = [];
//     for(let i = 0; i<2; i++) {
//     let shooter = function() {
//       console.log(i);
//     }
//     shooters.push(shooter);
//   }
//   return shooters;
// }
// let army = makeArmy();

function makeArmy() {
  let shooters = [];
  let i = 0;
  while(i < 2) {
    let j = i;
    let shooter = function() {
      console.log(j)
    }
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0]();
// army.forEach(a => a());
