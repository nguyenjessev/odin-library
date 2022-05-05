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
  for(const book of myLibrary) {
    const bookRow = document.createElement('tr');
    for(const prop in book) {
      const tableData = document.createElement('td');
      tableData.textContent = book[prop];
      bookRow.appendChild(tableData);
      document.querySelector('.library-table tbody').appendChild(bookRow);
    }
  }
}
