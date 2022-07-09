var clientURL = location.origin + location.pathname.split('/').slice(0, location.pathname.split('/').length - 1).join('/');
var serverURL = `http://127.0.0.1:4000`;
let token = null;
let user = null;
window.onload = function () {
  token = sessionStorage.getItem('access_token');
  if (token) {
    populate(token);
    fetchAllProducts(token);
  } else {
    location.assign(`${clientURL}/index.html`)
  }
  document.getElementById('logout').addEventListener('click', (event) => {
    event.preventDefault();
    logout(token);
  });
  document.getElementById('place-order').addEventListener('click', (event) => {
    event.preventDefault();
    placeOrder(token, user.id)
    .then(response => {
      if (response.error) {
        alert(response.error);
      } else {
        removeAllFromCart();
        response.forEach(item => stockReducer.bind(item)());
      }
    });
  })
}