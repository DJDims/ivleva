const Book = require("../Models/Book");
const Book_author = require("../Models/Book_author");
const Book_category = require("../Models/Book_category");

exports.create = (req, res) => {
    if (!req.body.title || !req.body.isbn || !req.body.pageCount || !req.body.publishedDate || !req.body.thumbnailUrl || !req.body.shortDescription || !req.body.longDescription || !req.body.status) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status
    }

    Book.create(book)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findAll = (req, res) => {
    Book.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

// class BookController{
//     async findAllBooks() {
//         return await Book.findAll().then(res=>{return res});
//     }

//     async findBookById(id) {
//         return await Book.findOne({where: {id: id}}).then(res=>{return res});
//     }

//     async findBookByTitle(title) {
//         return await Book.findOne({where: {title: title}}).then(res=>{return res});
//     }

//     async findBooksByCategoryId(categoryId) {
//         const booksCategories = Book_category.findAll({where: {categoryId: categoryId}}).then(res=>{return res});
//         const books = new Array();
//         booksCategories.forEach(element => {
//             books.push(this.findBookById(element['bookId']));
//         });
//         return books;
//     }

//     async findBooksByAuthorId(authorId) {
//         const booksAuthors = Book_author.findAll({where: {authorId: authorId}}).then(res=>{return res});
//         const books = new Array();
//         booksAuthors.forEach(element => {
//             books.push(this.findBookById(element['bookId']));
//         });
//         return books;
//     }

//     async addBook(title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status) {
//         Book.create({
//             title: title,
//             isbn: isbn,
//             pageCount: pageCount,
//             publishedDate: publishedDate,
//             thumbnailUrl: thumbnailUrl,
//             shortDescription: shortDescription,
//             longDescription: longDescription,
//             status: status
//         });
//     }

//     async editBook(id, title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status) {
//         Book.update({where: {id: id}}, {
//             title: title,
//             isbn: isbn,
//             pageCount: pageCount,
//             publishedDate: publishedDate,
//             thumbnailUrl: thumbnailUrl,
//             shortDescription: shortDescription,
//             longDescription: longDescription,
//             status: status
//         });
//     }

//     async deleteBook(id) {
//         Book.destroy({where: {id: id}});
//     }

// }