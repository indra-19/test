const books = [];

const addForm = document.getElementById('add-form');
const searchForm = document.getElementById('search-form');
const unFinishedReading = document.getElementById('unfinished-book');
const finishedReading = document.getElementById('finished-book');
const dialog = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog-content');

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('Local storage not found!');
    return false;
  }
  return true;
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem('bookshelf');
  let item = JSON.parse(serializedData);

  if (item !== null) {
    for (const book of item) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event('render-book'));
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem('bookshelf', parsed);
    console.log(parsed);
  }
}

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, writer, year, isFinished) {
  return {
    id,
    title,
    writer,
    year,
    isFinished
  }
}

function findBook(id) {
  for (const book of books) {
    if (book.id === id) {
      return book;
    }
  }
  return null;
}
  
function findBookIndex(id) {
  for (const index in books) {
    if (books[index].id === id) {
      return index;
    }
  }
  return -1;
}

function makeBook(bookObject) {
  const {id, title, writer, year, isFinished} = bookObject;
  
  const titleBook = document.createElement('h3');
  titleBook.innerText = title;

  const subtitleBook = document.createElement('h4');
  subtitleBook.innerText = `${writer} (${year})`;

  const bookContainer = document.createElement('article');
  bookContainer.append(titleBook, subtitleBook);
  bookContainer.setAttribute('id', id);

  const mainBtn = document.createElement('button');
  mainBtn.classList.add('btn-main');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.innerText = 'Hapus';
  deleteBtn.addEventListener('click', function () {
      showDialog(title, id);
  });

  if (isFinished) {
    mainBtn.innerText = 'Belum selesai dibaca';
    mainBtn.addEventListener('click', function () {
      unfinishBook(id);
    });

    bookContainer.append(mainBtn, deleteBtn);
  } else {
    mainBtn.innerText = 'Selesai dibaca';
    mainBtn.addEventListener('click', function () {
      finishBook(id);
    });
  
    bookContainer.append(mainBtn, deleteBtn);
  }
  
  return bookContainer;
}  

function addBook() {
  const titleBook = document.getElementById('title').value;
  const writerBook = document.getElementById('writer').value;
  const yearBook = document.getElementById('year').value;
  const isFinishedBook = document.getElementById('is-finished').checked;
  
  const generatedID = generateId();
  const bookObject = generateBookObject(generatedID, titleBook, writerBook, yearBook, isFinishedBook);
  books.push(bookObject);
  
  document.dispatchEvent(new Event('render-book'));
  saveData();
}

function searchBook() {
  const search = document.getElementById('search-value').value;
  unFinishedReading.innerHTML = '';
  finishedReading.innerHTML = '';
  
  for (const book of books) {
    const bookElement = makeBook(book);
    if (book.title.toLowerCase().search(search.toLowerCase()) !== -1) {
      if (book.isFinished) {
        finishedReading.append(bookElement);
      } else {
        unFinishedReading.append(bookElement);
      }
    }
  }
}

function finishBook(id) {
  const target = findBook(id);
  
  if (target == null) return;
  
  target.isFinished = true;
  document.dispatchEvent(new Event('render-book'));
  saveData();
}

function unfinishBook(id) {
  const target = findBook(id);
  
  if (target == null) return;
  
  target.isFinished = false;
  document.dispatchEvent(new Event('render-book'));
  saveData();
}

function deleteBook(id) {
  const target = findBookIndex(id);
  
  if (target === -1) return;
  
  books.splice(target, 1);
  document.dispatchEvent(new Event('render-book'));
  dialog.style.display = "none";
  saveData();
}

function showDialog(title, id) {
  dialog.style.display = "flex";
  dialog.addEventListener('click', function () {
    dialog.style.display = "none";
  });

  dialogContent.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  dialogContent.innerHTML = '';

  const titleDialog = document.createElement('h3');
  titleDialog.innerText = `Yakin ingin menghapus "${title}"?`;

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('btn-cancel');
  cancelBtn.innerText = 'Batal';
  cancelBtn.addEventListener('click', function () {
    dialog.style.display = "none";
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.innerText = 'Hapus';
  deleteBtn.addEventListener('click', function () {
    deleteBook(id);
  });

  dialogContent.append(titleDialog, cancelBtn, deleteBtn);
}

document.addEventListener('DOMContentLoaded', function () {
  addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });
  
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchBook();
  });
  
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
  
document.addEventListener('render-book', function () {
  unFinishedReading.innerHTML = '';
  finishedReading.innerHTML = '';
  
  for (const book of books) {
    const bookElement = makeBook(book);
    if (book.isFinished) {
      finishedReading.append(bookElement);
    } else {
      unFinishedReading.append(bookElement);
    }
  }
})