let student = {
  firstname: "John",
  lastname: "Doe",
  grades: [],
  inputNewGrade: function(grade) {
    this.grades.push(grade);
  },
  computeAverageGrade: function() {
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
  }
}

let st1= Object.create(student);
st1.firstname = "Mike";
st1.lastname = "Brown";
st1.inputNewGrade(90);
st1.inputNewGrade(80);
st1.inputNewGrade(97);
let st2= Object.create(student);
st2.firstname = "Edward";
st2.lastname = "Smith";
st2.inputNewGrade(80);
st2.inputNewGrade(91);
let st3= Object.create(student);
st3.firstname = "Rayn";
st3.lastname = "Paul";
st3.inputNewGrade(94);
st3.inputNewGrade(81);
st3.inputNewGrade(100);
st3.inputNewGrade(86);
st3.inputNewGrade(97);
let students = [st1, st2, st3];
const console2 = document.getElementById('console2');
const line1 = `*********** Object literal way ***********\n`;
console.log(line1)
console2.innerText += line1;
students.forEach(s => {
  const line = `${s.firstname} ${s.lastname}'s average grade is ${s.computeAverageGrade()}\n`;
  console.log(line)
  console2.innerText += line;
})
