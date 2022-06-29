class Student {
  constructor(id) {
    this.sid =  id;
    this.answers = [];
  }
  addAnswer(answer) {
    this.answers.push(answer);
  }
}

class Question {
  constructor(id, answer) {
    this.qid =  id;
    this.answer = answer;
  }
  checkAnswer(answer) {
    return this.answer === answer;
  }
}

class Quiz {
  constructor(questions, students) {
    this.questions = questions;
    this.students = students;
    this.showToHTML();
  }
  question(answer) {
    return this.questions.find(q => q.qid === answer.qid)
  }
  scoreStudentBySid(sid) {
    const student = this.students.find(s => s.sid == sid);
    return student.answers
      .filter((answer) => this.question(answer).answer === answer.answer) // filter only correct answers
      .reduce((correct) => correct + 1, 0); // count correct answer and return
  }
  getAverageScore() {
    const avg = this.students.reduce((avg, student) => avg + this.scoreStudentBySid(student.sid), 0) / students.length;
    this.showAvgHTML(avg);
    return avg;
  }

  showAvgHTML(avg) {
    const element = document.getElementById('results');
    const parent = document.createElement('div');
    parent.innerHTML = `<strong>Average: ${avg}</strong>`;
    element.appendChild(parent);
  }

  showToHTML() {
    this.questions.forEach(question => {
      const element = document.getElementById('questions');
      const parent = document.createElement('div');
      parent.innerHTML = `<strong>Question ID: ${question.qid}   Answer: ${question.answer}</strong>`;
      element.appendChild(parent);
    });
    this.students.forEach(student => {
      const element = document.getElementById('students');
      const parent = document.createElement('div');
      parent.innerHTML = `<strong>Student ID: ${student.sid}</strong>`;
      student.answers
      .sort((a, b) => a.qid - b.qid)
      .forEach(answer => {
        const child = document.createElement('div');
        if (this.question(answer).answer === answer.answer) {
          child.innerHTML = `<strong class="correct">Answer: ${answer.qid} ${answer.answer}</strong>`;
        } else {
          child.innerHTML = `<strong class="incorrect">Answer: ${answer.qid} ${answer.answer}</strong>`;
        }
        parent.appendChild(child);
      });
      element.appendChild(parent);
    });
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5