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
        location.assign('/');
      });
  });
}
