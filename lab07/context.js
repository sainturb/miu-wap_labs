function askPassword(ok, fail) {
  let password = prompt("Put in a password: ", '');
  if (password === 'rockstar') ok();
  else fail();
}

let user = {
  name: "John",
  loginOk() {
    alert("You are now logged in");
  },
  loginFail() {
    alert("Failed to login");
  }
}

document.getElementById('login').addEventListener('click', () => {
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
});

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    const printStudent = function (student) {
      console.log(this.title + ": " + student);
      const element = document.getElementById('result2');
      element.innerText = element.innerText + '\n' + this.title + ": " + student;
    }
    this.students.forEach(printStudent.bind(this));
  }
};
group.showList.bind(group)();

