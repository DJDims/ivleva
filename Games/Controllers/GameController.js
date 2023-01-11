const Game = require("../Models/Game");
const Company = require("../Models/Company");
const Category = require("../Models/Category");
const Platform = require("../Models/Platform");
const GameCategory = require("../Models/Game_Category");
const GameCompany = require("../Models/Game_Company");
const GamePlatform = require("../Models/Game_Platform");
const { Op } = require("sequelize");

exports.create =  (req, res) => {
    if (!req.body.title || !req.body.publishYear || !req.body.poster || !req.body.description || !req.body.publisher) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        title: req.body.title.trim(),
        publishYear: req.body.publishYear,
        poster: req.body.poster.trim(),
        description: req.body.description.trim(),
        publisher: req.body.publisher
    }

    const companies = req.body.companies;
    const categories = req.body.categories;
    const platforms = req.body.platforms;

    Game.create(game)
    .then(data => {
        for (let i = 0; i < companies.length; i++) {
            GameCompany.create({gameId: data.id, companyId: companies[i]})
        }
        for (let i = 0; i < categories.length; i++) {
            GameCategory.create({gameId: data.id, categoryId: categories[i]})
        }
        for (let i = 0; i < platforms.length; i++) {
            GamePlatform.create({gameId: data.id, platformId: platforms[i]})
        }
        res.redirect("/games");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title || !req.body.publishYear || !req.body.poster || !req.body.description || !req.body.publisher) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        id: req.params.id,
        title: req.body.title.trim(),
        publishYear: req.body.publishYear,
        poster: req.body.poster.trim(),
        description: req.body.description.trim(),
        publisher: req.body.publisher
    }

    const companies = req.body.companies;
    const categories = req.body.categories;
    const platforms = req.body.platforms;

    Game.update(game, {where:{id: game.id}})
    .then(data => {
        GameCompany.destroy({where: {gameId: game.id}}).then(a => {
            GameCategory.destroy({where: {gameId: game.id}}).then(b => {
                GamePlatform.destroy({where: {gameId: game.id}}).then(c => {
                    for (let i = 0; i < companies.length; i++) {
                        GameCompany.create({gameId: game.id, companyId: companies[i]})
                    }
                    for (let i = 0; i < categories.length; i++) {
                        GameCategory.create({gameId: game.id, categoryId: categories[i]})
                    }
                    for (let i = 0; i < platforms.length; i++) {
                        GamePlatform.create({gameId: game.id, platformId: platforms[i]})
                    }
                    res.redirect("/games");
                });
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findAll = (req, res) => {
    Game.findAll()
    .then(data => {
        Game.count().then(total => {
            res.render('../Views/Games/table.ejs', {games: data, total: total});
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findAllByYear = (req, res) => {
    const year = req.params.year;
    Game.findAll({where: {publishYear: year}})
    .then(data => {
        Game.count({where: {publishYear: year}}).then(total => {
            res.render('../Views/Games/table.ejs', {games: data, total: total});
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findById = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    Game.findOne({where: {id: id}})
    .then(game => {
        GameCompany.findAll({where:{gameId: id}}).then(companyId => {
            const companyIds = [];
            companyId.forEach(element => {companyIds.push(element['companyId'])});
            Company.findAll({where:{id:{[Op.in]:companyIds}}}).then(companies => {
                GameCategory.findAll({where:{gameId: id}}).then(categoryId => {
                    const categoryIds = [];
                    categoryId.forEach(element => {categoryIds.push(element['categoryId'])});
                    Category.findAll({where:{id:{[Op.in]:categoryIds}}}).then(categories => {
                        GamePlatform.findAll({where:{gameId: id}}).then(platformId => {
                            const platformIds = [];
                            platformId.forEach(element => {platformIds.push(element['platformId'])});
                            Platform.findAll({where:{id:{[Op.in]:platformIds}}}).then(platforms => {
                                Company.findOne({where: {id: game.publisher}}).then(publisher => {
                                    res.render('../Views/Games/details.ejs', {game: game, companies: companies, categories: categories, platforms: platforms, publisher: publisher});
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.delete = (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    
    Game.destroy({where: {id: id}})
    .then(data => {
        GameCategory.destroy({where: {GameId: id}})
        .then(cat => {
            GameCompany.destroy({where: {GameId: id}})
            .then(com => {
                GamePlatform.destroy({where: {GameId: id}})
                .then(pla => {
                    res.redirect("/games");
                })
            })
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}