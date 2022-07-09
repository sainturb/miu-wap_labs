var clientURL = location.origin + location.pathname.split('/').slice(0, location.pathname.split('/').length - 1).join('/');
var serverURL = `http://127.0.0.1:4000`;

window.onload = function() {
  document.getElementById("form").addEventListener("click", login);
  const redirectURL = `${clientURL}/cart.html`;
  if (sessionStorage.getItem('access_token')) {
    location.assign(redirectURL)
  }

function login() {
  document.getElementById('error').innerText = '';
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
      if (response.error) {
        document.getElementById('error').innerText = response.error;
      } else {
        sessionStorage.setItem('access_token', response.token);
        location.assign(redirectURL)
      }
    });
}
}