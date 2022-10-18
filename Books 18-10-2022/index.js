// import * as booksArray from './BooksArray.js';
const booksArray = require('./BooksArray');

const db = require('./database.js');

let Book = require('./Book.js');
let Author = require('./Author.js');
let Category = require('./Category.js');
let Book_category = require('./Book_category.js');
let Book_author = require('./Book_author.js');

// Book.sync({force: true});
// Author.sync({force: true});
// Category.sync({force: true});
// Book_category.sync({force: true});
// Book_author.sync({force: true});

// Book.belongsToMany(Category, { through: 'Book_category' });
// Category.belongsToMany(Book, { through: 'Book_category' });
// Book.belongsToMany(Author, { through: 'Book_author' });
// Author.belongsToMany(Book, { through: 'Book_author' });

// Book.create({
//      // id: "1",
//      title: "Treasure Island",
//      isbn: "88005553535",
//      pageCount: "100",
//      publishedDate: "18.10.2022",
//      thumbnailUrl: "https://sun9-29.userapi.com/impg/ypzXXAah2wM5zC9YrVZ4R0j2zPt2Dx4JpYu0Yw/qNCO_4M6iI8.jpg?size=685x859&quality=95&sign=d455a6218f2cd696cab5801de4d749b8&type=album",
//      shortDescription: "Lolkek",
//      longDescription: "Lolkekcheburek",
//      status: "PUSBLISHED"
// });

const authorsSet = new Set();

for (let i = 0; i < booksArray.length; i++) {
     for (let j = 0; j < booksArray[i]['authors'].length; j++) {
          authorsSet.add(booksArray[i]['authors'][j]);
     }
}
// console.log(authorsSet);

for (let i = 0; i < authorsSet.size; i++) {
     console.log(authorsSet.log(i));
     // Author.create({
     //      id: i,
     //      firstname: authorsSet[i],
     //      surname: ''
     // });
}