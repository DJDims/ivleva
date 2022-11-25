const booksArray = require('./BooksArray');

const db = require('./database.js');

let Book = require('./Models/Book.js');
let Author = require('./Models/Author.js');
let Category = require('./Models/Category.js');
let Book_category = require('./Models/Book_category.js');
let Book_author = require('./Models/Book_author.js');

function initDB(){
     Book.sync();
     Author.sync();
     Category.sync();
     Book_category.sync();
     Book_author.sync();
     
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
               if (booksArray[i]['categories'][j]== "") {
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
     for (let i = 0; i < booksArray.length; i++) {
          let thisBookAuthors = booksArray[i]['authors'];
          let b = await Book.findOne({where: {title: booksArray[i]['title']}}).then(res=>{return res});
          // console.log(b['id']);

          for (let j = 0; j < thisBookAuthors.length; j++) {
               let a = await Author.findOne({where: {
                    firstname: thisBookAuthors[j].slice(0, thisBookAuthors[j].search(' ')), 
                    surname: thisBookAuthors[j].slice(thisBookAuthors[j].search(' '), thisBookAuthors[j].length)}}).then(res=>{return res});
               Book_author.create({
                    BookId: b['id'],
                    AuthorId: a['id']
               })
          }
     }
}
//-------------------- Книга-автор --------------------

//-------------------- Книга-категория --------------------
async function addBookCategory(){
     for (let i = 0; i < booksArray.length; i++) {
          let thisBookCategories = booksArray[i]['categories'];
          let b = await Book.findOne({where: {title: booksArray[i]['title']}}).then(res=>{return res});

          for (let j = 0; j < thisBookCategories.length; j++) {
               let c = await Category.findOne({where: {categoryName: thisBookCategories[j]}}).then(res=>{return res});
               // console.log(c)
               Book_category.create({
                    BookId: b['id'],
                    CategoryId: c['id']
               })
          }
     }
}
//-------------------- Книга-категория --------------------



// initDB();
// addAuthors();
// addCategories();
// addBooks();
// addBookAuthor();
addBookCategory()

