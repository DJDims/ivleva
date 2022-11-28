const Category = require("../Models/Category");
const Company = require("../Models/Company");

exports.showAddCategory = (req, res) => {
    res.render('../Views/Categories/addCategory.ejs');
}
exports.showEditCategory = (req, res) => {
    res.render('../Views/Categories/editCategory.ejs');
}

exports.showAddGame = (req, res) => {
    Category.findAll().then(categories => {
        Company.findAll().then(companies => {
            res.render('../Views/Games/addGame.ejs', {categories: categories, companies: companies});
        })
    })
}
exports.showEditGame = (req, res) => {
    res.render('../Views/Games/editGame.ejs');
}

exports.showAddCompany = (req, res) => {
    res.render('../Views/Companies/addCompany.ejs');
}
exports.showEditCompany = (req, res) => {
    res.render('../Views/Companies/editCompany.ejs');
}