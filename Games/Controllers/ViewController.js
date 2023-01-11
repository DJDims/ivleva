const Category = require("../Models/Category");
const Company = require("../Models/Company");
const Platform = require("../Models/Platform");
const Game = require("../Models/Game");
const GameCategory = require("../Models/Game_Category");
const GameCompany = require("../Models/Game_Company");
const GamePlatform = require("../Models/Game_Platform");
const { Op } = require("sequelize");

//----------Categories----------
exports.showAddCategory = (req, res) => {
    res.render('../Views/Categories/add.ejs');
}
exports.showEditCategory = (req, res) => {
    const id = req.params.id;
    Category.findOne({where: {id: id}})
    .then(data => {
        res.render('../Views/Categories/edit.ejs', {data: data});
    })
}
exports.showDeleteCategory = (req, res) => {
    const id = req.params.id;
    Category.findOne({where: {id: id}})
    .then(data => {
        GameCategory.count({where: {categoryId: id}})
        .then(connections => {
            res.render('../Views/Categories/delete.ejs', {data: data, connections: connections});
        })
    })
}
//----------Categories----------

//----------Games----------
exports.showAddGame = (req, res) => {
    Category.findAll().then(categories => {
        Company.findAll().then(companies => {
            Platform.findAll().then(platforms => {
                res.render('../Views/Games/add.ejs', {categories: categories, companies: companies, platforms: platforms});
            })
        })
    })
}
exports.showEditGame = (req, res) => {
    const id = req.params.id;
    Game.findOne({where: {id: id}})
    .then(game => {
        GameCategory.findAll({attributes:['categoryId'], where:{gameId:id}}).then(thisCategoriesId => {
            const thisCategoriesIds = [];
            thisCategoriesId.forEach(element => {thisCategoriesIds.push(element['categoryId'])});
            Category.findAll({where: {id:{[Op.in]:thisCategoriesIds}}}).then(thisCategories => {
                Category.findAll({where:{id:{[Op.not]:thisCategoriesIds}}}).then(baseCategories => {
                    
                    GameCompany.findAll({attributes:['companyId'], where:{gameId:id}}).then(thisCompaniesId => {
                        const thisCompaniesIds = [];
                        thisCompaniesId.forEach(element => {thisCompaniesIds.push(element['companyId'])});
                        Company.findAll({where: {id:{[Op.in]:thisCompaniesIds}}}).then(thisCompanies => {
                            Company.findAll({where:{id:{[Op.not]:thisCompaniesIds}}}).then(baseCompanies => {
                                
                                GamePlatform.findAll({attributes:['platformId'], where:{gameId:id}}).then(thisPlatformsId => {
                                    const thisPlatformsIds = [];
                                    thisPlatformsId.forEach(element => {thisPlatformsIds.push(element['platformId'])});
                                    Platform.findAll({where: {id:{[Op.in]:thisPlatformsIds}}}).then(thisPlatforms => {
                                        Platform.findAll({where:{id:{[Op.not]:thisPlatformsIds}}}).then(basePlatforms => {
                                            Company.findAll().then(companies => {
                                                res.render('../Views/Games/edit.ejs', {
                                                    data: game, 
                                                    companies: companies,
                                                    thisCategories: thisCategories, 
                                                    baseCategories: baseCategories, 
                                                    thisCompanies: thisCompanies, 
                                                    baseCompanies: baseCompanies, 
                                                    thisPlatforms: thisPlatforms, 
                                                    basePlatforms: basePlatforms
                                                });
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
exports.showDeleteGame = (req, res) => {
    const id = req.params.id;
    Game.findOne({where: {id: id}})
    .then(data => {
        GameCategory.count({where: {gameId: id}}).then(catCon => {
            GameCompany.count({where: {gameId: id}}).then(comCon => {
                GamePlatform.count({where: {gameId: id}}).then(plaCon => {
                    const connections = catCon + comCon + plaCon;
                    res.render('../Views/Games/delete.ejs', {data: data, connections: connections});
                })
            })
        })
    })
}
//----------Games----------

//----------Companies----------
exports.showAddCompany = (req, res) => {
    res.render('../Views/Companies/add.ejs');
}
exports.showEditCompany = (req, res) => {
    const id = req.params.id;
    Company.findOne({where:{id: id}})
    .then(data => {
        res.render('../Views/Companies/edit.ejs', {data: data});
    })
}
exports.showDeleteCompany = (req, res) => {
    const id = req.params.id;
    Company.findOne({where: {id: id}})
    .then(data => {
        GameCompany.count({where: {companyId: id}})
        .then(connections => {
            res.render('../Views/Companies/delete.ejs', {data: data, connections: connections});
        })
    })
}
//----------Companies----------

//----------Platforms----------
exports.showAddPlatform = (req, res) => {
    res.render('../Views/Platforms/add.ejs');
}
exports.showEditPlatform = (req, res) => {
    const id = req.params.id;
    Platform.findOne({where: {id: id}})
    .then(data => {
        res.render('../Views/Platforms/edit.ejs', {data: data});
    })
}
exports.showDeletePlatform = (req, res) => {
    const id = req.params.id;
    Platform.findOne({where: {id: id}})
    .then(data => {
        GamePlatform.count({where: {platformId: id}})
        .then(connections => {
            res.render('../Views/Platforms/delete.ejs', {data: data, connections: connections});
        })
    })
}
//----------Platforms----------