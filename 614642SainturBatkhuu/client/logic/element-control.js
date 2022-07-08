var fillProductTable = (products) => {
  if (products.length === 0) {
    // empty products
  }
  const body = document.getElementById('product-list');
  products.forEach(product => {
    let tr = document.createElement('tr');
    tr = addColumnImage(tr, product.image);
    tr = addColumnValue(tr, product.name);
    tr = addColumnValue(tr, product.price);
    tr = addColumnValue(tr, product.stock);
    tr = addColumnButton(tr, 'Add to cart', getAddToCartButton(product));
    body.appendChild(tr);
  });
}

var fillCartTable = (items) => {
  if (items.length === 0) {
    document.getElementById('cart-message').innerText = 'There is no item in your shopping cart';
    document.getElementById('cart-table').style.display = 'none';
    document.getElementById( 'place-order').style.display = 'none';
  } else {
    document.getElementById('cart-table').style.display = 'block';
    document.getElementById( 'place-order').style.display = 'block';
  }
  const body = document.getElementById('cart-items');
}

var addColumnValue = (tr, value) => {
  const td = document.createElement('td');
  td.innerText = value;
  tr.appendChild(td);
  return tr;
}

var addColumnImage = (tr, asset) => {
  const td = document.createElement('td');
  const image = document.createElement('img');
  image.src = `${serverURL}${asset}`;
  td.appendChild(image);
  tr.appendChild(td);
  return tr;
}

var addColumnButton = (tr, label, func) => {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.innerText = label;
  button.onclick = func;
  td.appendChild(button);
  tr.appendChild(td);
  return tr;
}


var getAddToCartButton = (product) => {
  return function () {
    console.log('add');
  }
}