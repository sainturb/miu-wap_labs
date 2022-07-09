var clientURL = `http://127.0.0.1:5500`;
var serverURL = `http://127.0.0.1:4000`;
let token = null;
let user = null;
window.onload = function () {
  token = sessionStorage.getItem('access_token');
  if (token) {
    populate(token);
    fetchAllProducts(token);
  } else {
    location.assign(`${clientURL}/client/index.html`)
  }
  document.getElementById('logout').addEventListener('click', () => {logout(token)});
  document.getElementById('place-order').addEventListener('click', () => {placeOrder(token)})
}