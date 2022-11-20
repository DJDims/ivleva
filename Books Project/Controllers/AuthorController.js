const Author = require("../Models/Author");

exports.addAuthor = function(req, res) {
    res.send('Add author');
}

exports.getAllAuthors = function(req, res) {
    console.log(Author.findAll())
    res.render('authorsTable.hbs', {
        authors: Author.findAll()
    })
}


// exports.create = (req, res) => {
//     if (!req.body.fisrtname || !req.body.lastname) {
//         res.status(400).send({
//             message: "Content can't be empty"
//         })
//         return;
//     }

//     const author = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname
//     }

//     Author.create(author)
//     .then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error)"
//         })
//     })
// }

// exports.findAll = (req, res) => {
//     Author.findAll()
//     .then(data => {
//         res.send(data)
//     })
//     .then(res.render('../Views/authorsTable.hbs', {
//             authors: res.body
//         }))

    // res.render('../Views/authorsTable.hbs', {
    //     authors: Author.findAll().then(result=>{return result})
    // })
    // Author.findAll()
    // .then(data => {
    //     res.send(data)
    // })
    // .catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error)"
    //     })
    // })
// }

// class BookController{
//     async findAllBoks() {
//         return await Author.findAll().then(res=>{return res});
//     }

//     async findAuthorById(id) {
//         return await Author.findOne({where: {id: id}}).then(res=>{return res});
//     }

//     async findAuthorByFirstname(firstname) {
//         return await Author.findOne({where: {firstname: firstname}}).then(res=>{return res});
//     }

//     async findAuthorsByBookId(bookId){
//         const booksAuthors = Book_category.findAll({where: {bookId: bookId}}).then(res=>{return res});
//         const authors = new Array();
//         booksAuthors.forEach(element => {
//             authors.push(this.findAuthorById(element['authorId']));
//         });
//         return authors;
//     }

//     async addAuthor(firstname, surname) {
//         Author.create({
//             firstname: firstname,
//             surname: surname
//         });
//     }

//     async editAuthor(id, firstname, surname) {
//         Author.update({firstname: firstname, surname: surname}, {where: {id: id}});
//     }

//     async deleteAuthor(id) {
//         Author.destroy({where:{id: id}});
//     }

// }

