/* eslint max-classes-per-file: ["error", 3] */
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
class StorageInLocal {
  constructor() {
    this.numberOfBooks = this.getListBooks().length + 1;
  }

  getListBooks() {
    if (localStorage.getItem('awesomeBooks') === null) {
      this.awesomeBooks = [];
    } else {
      this.awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
    }

    return this.awesomeBooks;
  }

  addBook(book) {
    const newBook = {
      id: this.numberOfBooks, title: book.title, author: book.author,
    };
    const awesomeBooks = this.getListBooks();
    awesomeBooks.push(newBook);
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    this.numberOfBooks += 1;
  }

  removeBook(id) {
    const awesomeBooks = this.getListBooks();
    const filteredBooks = awesomeBooks.filter((book) => book.id !== id);
    localStorage.setItem('awesomeBooks', JSON.stringify(filteredBooks));
  }
}

const store = new StorageInLocal();

class UI {
  static displayAllBooks() {
    const awesomeBooks = store.getListBooks();
    awesomeBooks.forEach((book) => UI.addBookList(book));
    UI.hideOrRemoveFieldet();
  }

  // Display books dynamically
  static addBookList(book) {
    const TheBookList = document.getElementById('container-book-list');

    const divContent = document.createElement('div');
    divContent.innerHTML = `<div>"${book.title}" By ${book.author}</div>
          <button id="book-num-${book.id}"class="btn-remove-item"> Remove </button>
          `;
    TheBookList.appendChild(divContent);
    divContent.classList.add('book-row');
  }

  // Delete book
  static deleteBook(element) {
    if (element.classList.contains('btn-remove-item')) {
      element.parentElement.remove();
    }
  }

  // Clear input fields
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static hideOrRemoveFieldet() {
    if (store.getListBooks().length === 0) {
      document.querySelector('#fieldset').classList.add('hide');
    } else {
      document.querySelector('#fieldset').classList.remove('hide');
    }

    document.addEventListener('DOMContentLoaded', UI.displayAllBooks);
    document.querySelector('.books-container').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
  }
}

document.addEventListener('DOMContentLoaded', UI.displayAllBooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = store.numberOfBooks;

  const book = new Book(title, author, id);

  UI.addBookList(book);
  store.addBook(book);
  UI.clearFields();
  UI.hideOrRemoveFieldet();
});

document.querySelector('#container-book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const btnID = e.target.id;
  const arrValues = btnID.split('-');
  const idString = arrValues[arrValues.length - 1];
  const id = parseInt(idString, 10);
  store.removeBook(id);
  UI.hideOrRemoveFieldet();
});
