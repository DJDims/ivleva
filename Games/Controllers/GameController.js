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

    Game.create(game)
    .then(data => {
        res.send({message: "Game "+game.title+" was succesfully added"});
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

    Game.update(game, {where:{id: game.id}})
    .then(data => {
        
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

exports.findByPlatform = (req, res) => {
    if (!req.params.platform) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const platformTitle = req.params.platform;
    Platform.findOne({where: {title: platformTitle}}).then(platform => {
        GamePlatform.findAll({attributes:['gameId'], where: {platformId: platform.id}, raw: true}).then(gp => {
            let out = [];
            gp.forEach(e => {
                out.push(e.gameId);
            });
            Game.findAll({where: {id: {[Op.in]: out}}}).then(data => {
                res.send(data)
            })
        })
    })
}

exports.addCompanies = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.сompanies) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.сompanies.forEach(e => {
        Company.findByPk(e).then(data => {
            if(data) {
                GameCompany.create({gameId: req.params.id, companyId: e})
                .catch(err => {
                    out.push("Failed! Dublicate row with id"+e);
                });
            } else {
                out.push("Failed! Company with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully added"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}

exports.removeCompanies = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.сompanies) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.сompanies.forEach(e => {
        Company.findByPk(e).then(data => {
            if(data) {
                GameCompany.destroy({gameId: req.params.id, companyId: e})
            } else {
                out.push("Failed! Company with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully removed"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}

exports.addCategories = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.сategories) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.сategories.forEach(e => {
        Category.findByPk(e).then(data => {
            if(data) {
                GameCategory.create({gameId: req.params.id, categoryId: e})
                .catch(err => {
                    out.push("Failed! Dublicate row with id"+e);
                });
            } else {
                out.push("Failed! Category with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully added"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}

exports.removeCategories = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.сategories) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.сategories.forEach(e => {
        Category.findByPk(e).then(data => {
            if(data) {
                GameCategory.destroy({gameId: req.params.id, categoryId: e})
            } else {
                out.push("Failed! Category with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully removed"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}

exports.addPlatforms = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.platforms) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.platforms.forEach(e => {
        Platform.findByPk(e).then(data => {
            if(data) {
                GamePlatform.create({gameId: req.params.id, platformId: e})
                .catch(err => {
                    out.push("Failed! Dublicate row with id"+e);
                });
            } else {
                out.push("Failed! Platform with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully added"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}

exports.removePlatforms = (req, res) => {
    let out = [];
    if (!req.params.id || !req.body.platforms) {
        res.status(400).send({message: "Content can't be empty"})
        return;
    }

    req.body.platforms.forEach(e => {
        Platform.findByPk(e).then(data => {
            if(data) {
                GamePlatform.destroy({gameId: req.params.id, platformId: e})
            } else {
                out.push("Failed! Platform with id "+e+" not exists");
            }
        })
    });
    if (out.length == 0) {
        res.send({message: "All successfully removed"});
    } else {
        res.status(404).send({message: out});
    }
    return;
}
