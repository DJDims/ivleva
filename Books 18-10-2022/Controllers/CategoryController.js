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

}