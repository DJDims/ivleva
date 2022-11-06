const Book_category = require("../Models/Book_category");
const Category = require("../Models/Category");

class CategoryController{
    async findAllCategories() {
        return await Category.findAll().then(res=>{return res});
    }
    
    async findCategoryById(id) {
        return await Category.findOne({where: {id: id}}).then(res=>{return res});
    }

    async findCategoryByName(name) {
        return await Category.findOne({where: {categoryName: name}}).then(res=>{return res});
    }

    async findCategoriesByBookId(bookId){
        const booksCategories = Book_category.findAll({where: {bookId: bookId}}).then(res=>{return res});
        const categories = new Array();
        booksCategories.forEach(element => {
            categories.push(this.findCategoryById(element['categoryId']));
        });
        return categories;
    }

}