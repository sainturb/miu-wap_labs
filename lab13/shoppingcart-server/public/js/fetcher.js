
fetch('http://localhost:3000/books')
.then(response => response.json())
.then(data => {
  const table = document.getElementById('table-list');
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
    getButton.href = `/get?id=${book.id}`;
    const updateButton = document.createElement('a');
    updateButton.innerText = 'Update';
    updateButton.href = `/update?id=${book.id}`;
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
});