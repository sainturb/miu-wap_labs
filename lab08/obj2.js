function Student(firstname, lastname, grades = []) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.grades = grades;
}

Student.prototype.inputNewGrade = function(grade) {
  this.grades.push(grade);
}

Student.prototype.computeAverageGrade = function() {
  return this.grades.reduce((a, b) => a + b) / this.grades.length;
}

Array.prototype.mysort = function() {
  const sorted = this;
  const length = this.length;
  for(let i = length; i >0 ; i--) {
    for(let j = 1; j < length; j++) {
      if (sorted[j - 1] > sorted[j]) {
        let temp = sorted[j-1];
        sorted[j-1]= sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted;
}

let fst1 = new Student("Mike", "Brown");
fst1.inputNewGrade(90);
fst1.inputNewGrade(80);
fst1.inputNewGrade(97);
let fst2 = new Student("Edward", "Smith");
fst2.inputNewGrade(80);
fst2.inputNewGrade(91);
let fst3 = new Student("Rayn", "Paul");
fst3.inputNewGrade(94);
fst3.inputNewGrade(81);
fst3.inputNewGrade(100);
fst3.inputNewGrade(86);
fst3.inputNewGrade(97);
let fstudents = new Array(fst1, fst2, fst3);
const console3 = document.getElementById('console3');
const line2 = `*********** Constructor function way ***********\n`;
console.log(line2)
console3.innerText += line2;
fstudents.forEach(s => {
  const line = `${s.firstname} ${s.lastname}'s average grade is ${s.computeAverageGrade()}\n`
  console.log(line);
  console3.innerText += line;
});

const console4 = document.getElementById('console4');
const line3 = `*********** Before sort ***********\n`;
console.log(line3)
console4.innerText += line3;
console.log()
fstudents.forEach(s => {
  const line = `${s.grades}\n`;
  console.log(line);
  console4.innerText += line;
});

const line4 = `*********** After sort ***********\n`;
console.log(line4);
console4.innerText += line4;
fstudents.forEach(s => {
  s.grades.mysort();
  const line = `${s.grades}\n`;
  console.log(line);
  console4.innerText += line;
});

