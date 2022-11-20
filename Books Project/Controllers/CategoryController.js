const Book_category = require("../Models/Book_category");
const Category = require("../Models/Category");

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const category = {
        name: req.body.name,
    }

    Category.create(category)
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
    Category.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

// class CategoryController{
//     async findAllCategories() {
//         return await Category.findAll().then(res=>{return res});
//     }
    
//     async findCategoryById(id) {
//         return await Category.findOne({where: {id: id}}).then(res=>{return res});
//     }

//     async findCategoryByName(name) {
//         return await Category.findOne({where: {categoryName: name}}).then(res=>{return res});
//     }

//     async findCategoriesByBookId(bookId) {
//         const booksCategories = Book_category.findAll({where: {bookId: bookId}}).then(res=>{return res});
//         const categories = new Array();
//         booksCategories.forEach(element => {
//             categories.push(this.findCategoryById(element['categoryId']));
//         });
//         return categories;
//     }

//     async addCategory(categoryName) {
//         Category.create({
//             categoryName: categoryName
//         });
//     }

//     async editCategory(id, categoryName) {
//         Category.update({categoryName: categoryName}, {where: {id: id}});
//     }

//     async deleteCategory(id) {
//         Category.destroy({where: {id: id}});
//     }

// }