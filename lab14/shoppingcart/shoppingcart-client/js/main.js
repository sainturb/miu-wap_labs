var clientURL = location.origin + location.pathname.split('/').slice(0, location.pathname.split('/').length - 1).join('/')

window.onload = function () {

  const addButton = document.getElementById('add-book');
  if (addButton) {
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      location.assign(`${clientURL}/add.html`)
    })
  }

  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(data => {
      const table = document.getElementById('table-list');
      if (table) {
        data.forEach(book => {
          const tr = document.createElement('tr');
          const tdId = document.createElement('td');
          const tdTitle = document.createElement('td');
          const tdISBN = document.createElement('td');
          const tdPublishedDate = document.createElement('td');
          const tdAuthor = document.createElement('td');
          const actions = document.createElement('td');

          const getButton = document.createElement('a');
          getButton.innerText = 'Get';
          getButton.href = `${clientURL}/get.html?id=${book.id}`;
          const updateButton = document.createElement('a');
          updateButton.innerText = 'Update';
          updateButton.href = `${clientURL}/update.html?id=${book.id}`;
          const deleteButton = document.createElement('a');
          deleteButton.innerText = 'Delete';
          deleteButton.addEventListener('click', () => {
            fetch(`http://localhost:3000/books/${book.id}`, { method: 'DELETE' })
              .then(() => location.reload());
          });

          actions.appendChild(getButton);
          actions.appendChild(updateButton);
          actions.appendChild(deleteButton);

          tdId.innerText = book.id;
          tdTitle.innerText = book.title;
          tdISBN.innerText = book.ISBN;
          tdPublishedDate.innerText = book.publishedDate;
          tdAuthor.innerText = book.author;
          tr.appendChild(tdId);
          tr.appendChild(tdTitle);
          tr.appendChild(tdISBN);
          tr.appendChild(tdPublishedDate);
          tr.appendChild(tdAuthor);
          tr.appendChild(actions);
          table.appendChild(tr);
        })
      }
    });

  const params = new URLSearchParams(window.location.search);
  if (params.get('id')) {
    fetch(`http://localhost:3000/books/${params.get('id')}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          document.getElementById('error').innerText = data.error;
        } else {
          Object.keys(data).forEach((key) => {
            document.getElementById(key).value = data[key];
          });
        }
      });
  }

  const submit = document.getElementById('submit');
  if (submit) {
    submit.addEventListener('click', () => {
      const body = {};
      body.id = document.getElementById('id').value;
      body.title = document.getElementById('title').value;
      body.ISBN = document.getElementById('ISBN').value;
      body.publishedDate = document.getElementById('publishedDate').value;
      body.author = document.getElementById('author').value;
      const url = body.id ? `http://localhost:3000/books/${body.id}` : `http://localhost:3000/books`;
      const method = body.id ? 'PUT' : 'POST';
      fetch(url, { method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(data => {
          location.assign(`${clientURL}/index.html`);
        });
    });
  }
}