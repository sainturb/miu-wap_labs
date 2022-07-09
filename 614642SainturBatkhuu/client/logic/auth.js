var clientURL = location.origin;
var serverURL = `http://127.0.0.1:4000`;

window.onload = function() {
  document.getElementById("form").addEventListener("click", login);
  const redirectURL = `${clientURL}/client/cart.html`;
  if (sessionStorage.getItem('access_token')) {
    location.assign(redirectURL)
  }

function login() {
  const body = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }
  fetch(`${serverURL}/auth/login`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      sessionStorage.setItem('access_token', response.token);
      location.assign(redirectURL)
    });
}
}