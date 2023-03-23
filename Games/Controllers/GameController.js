const Game = require("../Models/Game");
const GameCategory = require("../Models/Game_Category");
const GameCompany = require("../Models/Game_Company");
const GamePlatform = require("../Models/Game_Platform");
const GameRegion = require("../Models/Game_Region");
const GameBundle = require("../Models/Game_Bundle");
const GameCharacteristic = require("../Models/Game_Characteristic");

const Company = require("../Models/Company");
const Bundle = require("../Models/Bundle");
const Category = require("../Models/Category");
const Platform = require("../Models/Platform");

const { Op } = require("sequelize");

exports.create =  (req, res) => {
    if (!req.body.title 
        || !req.body.publishYear 
        || !req.body.publisher
        || !req.body.poster 
        || !req.body.description
        || !req.body.price
        || !req.body.ageLimit
        ) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        title: req.body.title.trim(),
        publisher: req.body.publisher,
        publishYear: req.body.publishYear,
        poster: req.body.poster.trim(),
        description: req.body.description.trim(),
        price: req.body.price,
        ageLimit: req.body.ageLimit
    }

    const companies = req.body.companies;
    const categories = req.body.categories;
    const platforms = req.body.platforms;
    const regions = req.body.regions;
    const bundles = req.body.bundles;
    const characteristics = req.body.characteristics;

    Game.create(game)
    .then(data => {
        if(companies != null) {
            for (let i = 0; i < companies.length; i++) {
                GameCompany.create({gameId: data.id, companyId: companies[i]})
            }
        }
        if(categories != null) {
            for (let i = 0; i < categories.length; i++) {
                GameCategory.create({gameId: data.id, categoryId: categories[i]})
            }
        }
        if(platforms != null) {
            for (let i = 0; i < platforms.length; i++) {
                GamePlatform.create({gameId: data.id, platformId: platforms[i]})
            }
        }
        if(regions != null) {
            for (let i = 0; i < regions.length; i++) {
                GameRegion.create({gameId: data.id, regionId: regions[i]})
            }
        }
        if(bundles != null) {
            for (let i = 0; i < bundles.length; i++) {
                GameBundle.create({gameId: data.id, bundleId: bundles[i]})
            }
        }
        if(characteristics != null) {
            for (let i = 0; i < characteristics.length; i++) {
                GameCharacteristic.create({gameId: data.id, characteristicId: characteristics[i]})
            }
        }
    })
}

exports.update = (req, res) => {
    if (!req.params.id 
        || !req.body.title 
        || !req.body.publishYear 
        || !req.body.publisher
        || !req.body.poster 
        || !req.body.description
        || !req.body.price
        || !req.body.ageLimit) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        id: req.params.id,
        title: req.body.title.trim(),
        publisher: req.body.publisher,
        publishYear: req.body.publishYear,
        poster: req.body.poster.trim(),
        description: req.body.description.trim(),
        price: req.body.price,
        ageLimit: req.body.ageLimit
    }

    const companies = req.body.companies;
    const categories = req.body.categories;
    const platforms = req.body.platforms;
    const regions = req.body.regions;
    const bundles = req.body.bundles;
    const characteristics = req.body.characteristics;

    Game.update(game, {where:{id: game.id}})
    .then(data => {
        GameCompany.destroy({where: {gameId: game.id}}).then(a => {
            GameCategory.destroy({where: {gameId: game.id}}).then(b => {
                GamePlatform.destroy({where: {gameId: game.id}}).then(c => {
                    GameRegion.destroy({where: {gameId: game.id}}).then(d => {
                        GameBundle.destroy({where: {gameId: game.id}}).then(e => {
                            if(companies != null) {
                                for (let i = 0; i < companies.length; i++) {
                                    GameCompany.create({gameId: data.id, companyId: companies[i]})
                                }
                            }
                            if(categories != null) {
                                for (let i = 0; i < categories.length; i++) {
                                    GameCategory.create({gameId: data.id, categoryId: categories[i]})
                                }
                            }
                            if(platforms != null) {
                                for (let i = 0; i < platforms.length; i++) {
                                    GamePlatform.create({gameId: data.id, platformId: platforms[i]})
                                }
                            }
                            if(regions != null) {
                                for (let i = 0; i < regions.length; i++) {
                                    GameRegion.create({gameId: data.id, regionId: regions[i]})
                                }
                            }
                            if(bundles != null) {
                                for (let i = 0; i < bundles.length; i++) {
                                    GameBundle.create({gameId: data.id, bundleId: bundles[i]})
                                }
                            }
                            if(characteristics != null) {
                                for (let i = 0; i < characteristics.length; i++) {
                                    GameCharacteristic.create({gameId: data.id, characteristicId: characteristics[i]})
                                }
                            }
                        })
                    })
                })
            })
        })
    })
}

exports.findAll = (req, res) => {
    Game.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.findAllByYear = (req, res) => {
    if (!req.params.year) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const year = req.params.year;
    
    Game.findAll({where: {publishYear: year}})
    .then(data => {
        res.send(data)
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
    .then(data => {
        res.send(data)
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
                    res.send(data)
                })
            })
        })
    })
}

exports.count = (req, res) => {
    Game.count()
    .then(data => {
        res.send(data)
    })
}

exports.findByCompany = (req, res) => {
    if (!req.params.company) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const companyTitle = req.params.company;
    Company.findOne({where: {title: companyTitle}}).then(company => {
        GameCompany.findAll({attributes:['gameId'], where: {companyId: company.id}, raw: true}).then(gc => {
            let out = [];
            gc.forEach(e => {
                out.push(e.gameId);
            });
            Game.findAll({where: {id: {[Op.in]: out}}}).then(data => {
                res.send(data)
            })
        })
    })
}

exports.findByCategory = (req, res) => {
    if (!req.params.category) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const categoryTitle = req.params.category;
    Category.findOne({where: {title: categoryTitle}}).then(category => {
        GameCategory.findAll({attributes:['gameId'], where: {categoryId: category.id}, raw: true}).then(gc => {
            let out = [];
            gc.forEach(e => {
                out.push(e.gameId);
            });
            Game.findAll({where: {id: {[Op.in]: out}}}).then(data => {
                res.send(data)
            })
        })
    })
}

exports.findByBundle = (req, res) => {
    if (!req.params.bundle) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const bundleTitle = req.params.bundle;
    Bundle.findOne({where: {title: bundleTitle}}).then(bundle => {
        GameBundle.findAll({attributes:['gameId'], where: {bundleId: bundle.id}, raw: true}).then(bc => {
            let out = [];
            bc.forEach(e => {
                out.push(e.gameId);
            });
            Game.findAll({where: {id: {[Op.in]: out}}}).then(data => {
                res.send(data)
            })
        })
    })
}