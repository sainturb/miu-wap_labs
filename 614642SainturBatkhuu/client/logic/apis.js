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
      } else {
        sessionStorage.removeItem('access_token');
        location.assign(`${clientURL}/client/index.html`);
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
    location.assign(`${clientURL}/client/index.html`)
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

var fetchCartItems = (token) => {
  fetch(`${serverURL}/api/cart`, {
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

var placeOrder = (token) => {
  console.log('place order is here');
}