const Company = require("../Models/Company");
const GameCompany = require("../Models/Game_Company");
const Game = require("../Models/Game");
const { Op } = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const company = {
        title: req.body.title
    }

    Company.create(company)
    .then(data => {
        res.redirect("/companies");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const company = {
        id: req.params.id,
        title: req.body.title
    }

    Company.update(company, {where:{id: company.id}})
    .then(data => {
        res.redirect("/companies");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findAll = (req, res) => {
    Company.findAll()
    .then(data => {
        Company.count().then(total => {
            res.render('../Views/Companies/table.ejs', {companies: data, total: total});
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
    
    Company.findOne({where: {id: id}})
    .then(data => {
        GameCompany.findAll({where:{companyId: id}}).then(gameId => {
            const gameIds = [];
            gameId.forEach(element => {gameIds.push(element['gameId'])});
            Game.findAll({where:{id:{[Op.in]:gameIds}}}).then(gamesDeveloped => {
                Game.findAll({where:{publisher: id}}).then(gamesPublished => {
                    res.render('../Views/Companies/details.ejs', {company: data, gamesDeveloped: gamesDeveloped, gamesPublished: gamesPublished});
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
    
    Company.destroy({where: {id: id}})
    .then(data => {
        GameCompany.destroy({where: {companyId: id}})
        .then(com => {
            res.redirect("/companies");
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}