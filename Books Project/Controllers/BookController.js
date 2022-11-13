const Book = require("../Models/Book");
const Book_author = require("../Models/Book_author");
const Book_category = require("../Models/Book_category");

class BookController{
    async findAllBooks() {
        return await Book.findAll().then(res=>{return res});
    }

    async findBookById(id) {
        return await Book.findOne({where: {id: id}}).then(res=>{return res});
    }

    async findBookByTitle(title) {
        return await Book.findOne({where: {title: title}}).then(res=>{return res});
    }

    async findBooksByCategoryId(categoryId) {
        const booksCategories = Book_category.findAll({where: {categoryId: categoryId}}).then(res=>{return res});
        const books = new Array();
        booksCategories.forEach(element => {
            books.push(this.findBookById(element['bookId']));
        });
        return books;
    }

    async findBooksByAuthorId(authorId) {
        const booksAuthors = Book_author.findAll({where: {authorId: authorId}}).then(res=>{return res});
        const books = new Array();
        booksAuthors.forEach(element => {
            books.push(this.findBookById(element['bookId']));
        });
        return books;
    }

    async addBook(title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status) {
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

    async editBook(id, title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status) {
        Book.update({where: {id: id}}, {
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

    async deleteBook(id) {
        Book.destroy({where: {id: id}});
    }

}