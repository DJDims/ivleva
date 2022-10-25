// import * as booksArray from './BooksArray.js';
const booksArray = require('./BooksArray');

const db = require('./database.js');

let Book = require('./Book.js');
let Author = require('./Author.js');
let Category = require('./Category.js');
let Book_category = require('./Book_category.js');
let Book_author = require('./Book_author.js');

function initDB(){
     Book.sync({force: true});
     Author.sync({force: true});
     Category.sync({force: true});
     Book_category.sync({force: true});
     Book_author.sync({force: true});
     
     Book.belongsToMany(Category, { through: 'Book_category' });
     Category.belongsToMany(Book, { through: 'Book_category' });
     Book.belongsToMany(Author, { through: 'Book_author' });
     Author.belongsToMany(Book, { through: 'Book_author' });
}

//-------------------- Добавление авторов --------------------
function addAuthors(){
     const authorsSet = new Set();

     for (let i = 0; i < booksArray.length; i++) {
          for (let j = 0; j < booksArray[i]['authors'].length; j++) {
               authorsSet.add(booksArray[i]['authors'][j]);
          }
     }
     authorsSet.forEach(element => {
          let name = element.slice(0, element.search(' '));
          let surname = element.slice(element.search(' '), element.length);
          Author.create({
               firstname: name,
               surname: surname
          });
     });
}
//-------------------- Добавление авторов --------------------

//-------------------- Добавление категорий --------------------
function addCategories(){
     const categoriesSet = new Set();

     for (let i = 0; i < booksArray.length; i++) {
          for (let j = 0; j < booksArray[i]['categories'].length; j++) {
               if (booksArray[i]['categories'][j ]== "") {
                    continue;
               }
               categoriesSet.add(booksArray[i]['categories'][j]);
          }
     }
     categoriesSet.forEach(element => {
          Category.create({
               categoryName: element
          });
     });
}
//-------------------- Добавление категорий --------------------

//-------------------- Добавление книг --------------------
function addBooks(){
     const books = new Array();

     for (let i = 0; i < booksArray.length; i++) {
          const title = booksArray[i]['title'];
          const isbn = booksArray[i]['isbn'];
          const pageCount = booksArray[i]['pageCount'];
          const publishedDate = booksArray[i]['publishedDate'];
          const thumbnailUrl = booksArray[i]['thumbnailUrl'];
          const shortDescription = booksArray[i]['shortDescription'];
          const longDescription = booksArray[i]['longDescription'];
          const status = booksArray[i]['status'];

          Book.create({
               title: title,
               isbn: isbn,
               pageCount: pageCount,
               publishedDate: publishedDate,
               thumbnailUrl: thumbnailUrl,
               shortDescription: shortDescription,
               longDescription: longDescription,
               status: status
          });
     }
}
//-------------------- Добавление книг --------------------
//-------------------- Книга-автор --------------------

async function addBookAuthor(){
     let authorsArray = await Author.findAll().then(res=>{return res});
     for (let i = 0; i < authorsArray.length; i++) {
          console.log(authorsArray[i]);
     }
}
//-------------------- Книга-автор --------------------

//-------------------- Книга-категория --------------------
function addBookCategory(){

}
//-------------------- Книга-категория --------------------


// initDB();
// addAuthors();
// addCategories();
// addBooks();
addBookAuthor();