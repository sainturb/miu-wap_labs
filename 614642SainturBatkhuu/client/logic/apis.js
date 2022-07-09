var populate = (token) => {
  fetch(`${serverURL}/auth/populate`, {
    headers: {
      authorization: token
    }
  })
    .then(response => response.json())
    .then(response => {
      if (response.firstname) {
        document.getElementById('username').innerText = `, ${response.firstname} ${response.lastname} !`;
        user = response;
        fetchCartItems(token, user.id);
      } else {
        sessionStorage.removeItem('access_token');
        location.assign(`${clientURL}/index.html`);
      }
    });
}

var logout = (token) => {
  fetch(`${serverURL}/auth/logout`, {
    headers: {
      authorization: token
    }
  }).then(response => {
    sessionStorage.removeItem('access_token');
    location.assign(`${clientURL}/index.html`)
  })
}

var fetchAllProducts = (token) => {
  fetch(`${serverURL}/api/products`, {
    headers: {
      authorization: token
    }
  }).then(response => response.json())
  .then(response => {
    fillProductTable(response)
  });
}

var fetchCartItems = (token, user) => {
  fetch(`${serverURL}/api/cart?user=${user}`, {
    headers: {
      authorization: token
    }
  }).then(response => response.json())
  .then(response => {
    fillCartTable(response)
  });
}

var addToCart = (token, user, prodId) => {
  return fetch(`${serverURL}/api/cart?user=${user}&prodId=${prodId}`, {
    method: 'POST',
    headers: {
      authorization: token
    }
  }).then(response => response.json());
}

var removeFromCart = (token) => {
  return fetch(`${serverURL}/api/cart`, {
    method: 'DELETE',
    headers: {
      authorization: token
    }
  }).then(response => response.json());
}

var addQuantity = (token, user, prodId) => {
  return fetch(`${serverURL}/api/cart/quantity/add?user=${user}&prodId=${prodId}`, {
    method: 'PUT',
    headers: {
      authorization: token
    }
  }).then(response => response.json());
}

var minusQuantity = (token, user, prodId) => {
  return fetch(`${serverURL}/api/cart/quantity/minus?user=${user}&prodId=${prodId}`, {
    method: 'PUT',
    headers: {
      authorization: token
    }
  }).then(response => response.json());
}

var placeOrder = (token, user) => {
  return fetch(`${serverURL}/api/orders/place-order?user=${user}`, {
    method: 'POST',
    headers: {
      authorization: token
    }
  }).then(response => response.json());
}