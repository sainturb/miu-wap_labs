// fill cart items
var fillProductTable = (products) => {
  if (products.length === 0) {
    // empty products
  }
  const body = document.getElementById('product-list');
  products.forEach(product => {
    body.appendChild(fillProductRow(product));
  });
}
// fill product row
var fillProductRow = (product) => {
  let tr = document.createElement('tr');
  tr = addColumnImage(tr, product.image);
  tr = addColumnValue(tr, product.name);
  tr = addColumnValue(tr, product.price.toFixed(2));
  tr = addColumnValue(tr, product.stock);
  tr = addColumnButton(tr, 'Add to cart', getAddToCartButton(product));
  tr.id = `product-${product.prodId}`;
  return tr;
}
// fill cart items
var fillCartTable = (items) => {
  if (items.length === 0) {
    document.getElementById('cart-message').innerText = 'There is no item in your shopping cart';
    hideCartElements();
  } else {
    showCartElements();
  }
  const body = document.getElementById('cart-items');
  items.forEach(item => body.appendChild(fillCartRow(item)))
  updateTotal();
}
// show cart elements
var showCartElements = () => {
  document.getElementById('cart-message').innerText = '';
  document.getElementById('cart-table').style.display = 'table';
  document.getElementById('place-order').style.display = 'block';
}
// hide cart elements
var hideCartElements = () => {
  document.getElementById('cart-table').style.display = 'none';
  document.getElementById('place-order').style.display = 'none';
}
// fill product row
var fillCartRow = (item) => {
  let tr = document.createElement('tr');
  tr = addColumnValue(tr, item.name);
  tr = addColumnValue(tr, item.price.toFixed(2));
  tr = addColumnValue(tr, item.total.toFixed(2));
  tr = addColumnQuantity(tr, item.quantity, getMinusQuantityButton(item), getAddQuantityButton(item));
  tr.id = `item-${item.prodId}`;
  return tr;
}
// add text to td
var addColumnValue = (tr, value) => {
  const td = document.createElement('td');
  td.innerText = value;
  tr.appendChild(td);
  return tr;
}
// add image to td
var addColumnImage = (tr, asset) => {
  const td = document.createElement('td');
  const image = document.createElement('img');
  image.src = `${serverURL}${asset}`;
  td.appendChild(image);
  tr.appendChild(td);
  return tr;
}
// add button to td
var addColumnButton = (tr, label, func) => {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.innerText = label;
  button.onclick = func;
  td.appendChild(button);
  tr.appendChild(td);
  return tr;
}
// add quantity to td
var addColumnQuantity = (tr, value, minusFunc, addFunc) => {
  const td = document.createElement('td');
  const minus = document.createElement('button');
  const input = document.createElement('input');
  const add = document.createElement('button');
  td.className = 'action-number'
  minus.innerText = '-';
  minus.onclick = minusFunc;
  input.value = value;
  add.innerText = '+';
  add.onclick = addFunc;
  td.appendChild(minus);
  td.appendChild(input);
  td.appendChild(add);
  tr.appendChild(td);
  return tr;
}
// add to cart button
var getAddToCartButton = (product) => {
  return function () {
    // TO-DO add to cart check if exist already
    if (document.getElementById(`item-${product.prodId}`)) {
      alert('already added');
    } else {
      addToCart(token, user.id, product.prodId).then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          stockReducer(product.prodId);
          const item = {
            prodId: product.prodId,
            user: user.id,
            name: product.name,
            price: product.price,
            total: product.price * 1,
            quantity: 1
          };
          const body = document.getElementById('cart-items');
          body.appendChild(fillCartRow(item));
          showCartElements();
          updateTotal();
        }
      });
    }
  }
}
// stock +
var stockIncreaser = (prodId) => {
  const td = document.getElementById(`product-${prodId}`).children.item(3);
  td.innerText = ++td.innerText;
}
// stock -
var stockReducer = (prodId) => {
  const td = document.getElementById(`product-${prodId}`).children.item(3);
  td.innerText = --td.innerText;
}
// remove all items from cart
var removeAllFromCart = () => {
  const parent = document.getElementById('cart-items');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  document.getElementById('cart-message').innerText = 'Items are succussfully placed in order';
  hideCartElements();
  setTimeout(() => {
    document.getElementById('cart-message').innerText = 'There is no item in your shopping cart';
  }, 5000)
}
// 
var getRemoveFromCartButton = (prodId) => {
  return function () {}
}
// remove row from cart
var removeElementFromCart = (prodId) => {
  const parent = document.getElementById(`item-${prodId}`).parentNode;
  parent.removeChild(document.getElementById(`item-${prodId}`));
}
// add quantity item in cart
var getAddQuantityButton = (item) => {
  return function () {
    addQuantity(token, item.user, item.prodId)
      .then(response => {
        if (response.error) {
          alert('Stock unavailable');
        } else {
          const updated = response.find(i => i.user.toString() === item.user.toString() && i.prodId === item.prodId)
          const td = document.getElementById(`item-${item.prodId}`).children.item(3);
          const price = document.getElementById(`item-${item.prodId}`).children.item(2);
          price.innerText = updated.total.toFixed(2);;
          const input = td.children.item(1);
          input.value = updated.quantity;
          stockReducer(item.prodId);
        }
        updateTotal();
      })
  }
}
// add quantity item in cart
var getMinusQuantityButton = (item) => {
  return function () {
    minusQuantity(token, item.user, item.prodId)
      .then(response => {
        if (response.length === 0) {
          stockIncreaser(item.prodId)
          removeElementFromCart(item.prodId)
          document.getElementById('cart-message').innerText = 'There is no item in your shopping cart';
          hideCartElements();
        } else {
          const updated = response.find(i => i.user.toString() === item.user.toString() && i.prodId === item.prodId)
          if (updated) {
            const td = document.getElementById(`item-${item.prodId}`).children.item(3);
            const price = document.getElementById(`item-${item.prodId}`).children.item(2);
            price.innerText = updated.total.toFixed(2);;
            const input = td.children.item(1);
            input.value = updated.quantity;
            stockIncreaser(item.prodId)
          } else {
            stockIncreaser(item.prodId)
            removeElementFromCart(item.prodId)
          }
        }
        updateTotal();
      });
  }
}

var updateTotal = () => {
  const body = document.getElementById('cart-items');
  let total = 0;
  for (var i = 0; i < body.children.length; i++) {
    total += +body.children.item(i).children.item(2).innerText;
  }
  console.log(total);
  document.getElementById('total').innerText = total.toFixed(2);
}