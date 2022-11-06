const Author = require("../Models/Author");
const Book_category = require("../Models/Book_category");

class BookController{
    async findAllBoks() {
        return await Author.findAll().then(res=>{return res});
    }

    async findAuthorById(id) {
        return await Author.findOne({where: {id: id}}).then(res=>{return res});
    }

    async findAuthorByFirstname(firstname) {
        return await Author.findOne({where: {firstname: firstname}}).then(res=>{return res});
    }

    async findAuthorsByBookId(bookId){
        const booksAuthors = Book_category.findAll({where: {bookId: bookId}}).then(res=>{return res});
        const authors = new Array();
        booksAuthors.forEach(element => {
            authors.push(this.findAuthorById(element['authorId']));
        });
        return authors;
    }

}