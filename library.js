let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  refreshBooks();
}

function refreshBooks() {
  document.querySelector('.library-table tbody').innerHTML = null
  for(const [i, book] of myLibrary.entries()) {
    const bookRow = document.createElement('tr');
    for(const prop in book) {
      const tableData = document.createElement('td');
      tableData.textContent = book[prop];
      bookRow.appendChild(tableData);
    }
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.setAttribute('data-index', i);
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      refreshBooks();
    })

    const deleteButtonTd = document.createElement('td');
    deleteButtonTd.appendChild(deleteButton);
    bookRow.appendChild(deleteButtonTd);

    document.querySelector('.library-table tbody').appendChild(bookRow);
  }
}

const addBookButton = document.querySelector('.new-book-section button');
addBookButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  addBookToLibrary(title, author, pages, read);
});
