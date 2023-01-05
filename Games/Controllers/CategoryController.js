const Category = require("../Models/Category");
const GameCategory = require("../Models/Game_Category");
const Game = require("../Models/Game");
const { Op } = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const category = {
        title: req.body.title
    }

    Category.create(category)
    .then(data => {
        res.redirect("/categories");
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

    const category = {
        id: req.params.id,
        title: req.body.title
    }

    Category.update(category, {where:{id: category.id}})
    .then(data => {
        res.redirect("/categories");
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
        Category.count().then(total => {
            res.render('../Views/Categories/table.ejs', {categories: data, total: total});
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
    
    Category.findOne({where: {id: id}})
    .then(data => {
        GameCategory.findAll({where:{categoryId: id}}).then(gameId => {
            const gameIds = [];
            gameId.forEach(element => {gameIds.push(element['gameId'])});
            Game.findAll({where:{id:{[Op.in]:gameIds}}}).then(games => {
                res.render('../Views/Categories/details.ejs', {category: data, games: games});
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
    
    Category.destroy({where: {id: id}})
    .then(data => {
        GameCategory.destroy({where: {categoryId: id}})
        .then(cat => {
            res.redirect("/categories");
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}