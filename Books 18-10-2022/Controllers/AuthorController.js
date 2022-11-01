const Author = require("../Models/Author");

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

}