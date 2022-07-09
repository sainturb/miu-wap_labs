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
  tr = addColumnValue(tr, product.price);
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
  tr = addColumnValue(tr, item.price);
  tr = addColumnValue(tr, item.total);
  tr = addColumnValue(tr, item.quantity);
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
// add to cart button
var getAddToCartButton = (product) => {
  return function () {
    console.log('add', product);
    // TO-DO add to cart check if exist already
    if (document.getElementById(`item-${product.prodId}`)) {
      alert('already added');
    } else {
      console.log(token);
      addToCart(token, user.id, product.prodId).then(response => {
        if (response.error) {
          
        } else {
          stockReducer(product);
          const item = {
            prodId: product.prodId,
            name: product.name,
            price: product.price,
            total: product.price * 1,
            quantity: 1
          };
          const body = document.getElementById('cart-items');
          body.appendChild(fillCartRow(item));
          showCartElements();
        }
      });
    }
  }
}

var stockIncreaser = (product) => {
  const td = document.getElementById(`product-${product.prodId}`).children.item(3);
  td.innerText = ++product.stock;
}

var stockReducer = (product) => {
  const td = document.getElementById(`product-${product.prodId}`).children.item(3);
  td.innerText = --product.stock;
}

var getRemoveFromCartButton = (product) => {
  return function () {
    console.log('remove', product);

  }
}

var getAddQuantityButton = (item) => {

}

var getMinusQuantityButton = (item) => {

}