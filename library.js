let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
  }
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

    const readToggleButton = document.createElement('button');
    readToggleButton.setAttribute('type', 'button');
    readToggleButton.setAttribute('class', 'read-toggle-button');
    readToggleButton.setAttribute('data-index', i);
    readToggleButton.innerText = 'Toggle Read Status';
    readToggleButton.addEventListener('click', () => {
      myLibrary[i].read = myLibrary[i].read == 'Yes' ? 'No' : 'Yes';
      refreshBooks();
    });
    const readToggleTd = document.createElement('td');
    readToggleTd.appendChild(readToggleButton);
    bookRow.appendChild(readToggleTd);

    const deleteButton = document.createElement('span');
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.setAttribute('data-index', i);
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      refreshBooks();
    });
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
