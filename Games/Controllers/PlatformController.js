const Platform = require("../Models/Platform");
const GamePlatform = require("../Models/Game_Platform");
const Game = require("../Models/Game");
const { Op } = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const platform = {
        title: req.body.title
    }

    Platform.create(platform)
    .then(data => {
        res.redirect("/platforms");
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

    const platform = {
        id: req.params.id,
        title: req.body.title
    }

    Platform.update(platform, {where:{id: platform.id}})
    .then(data => {
        res.redirect("/platforms");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findAll = (req, res) => {
    Platform.findAll()
    .then(data => {
        Platform.count().then(total => {
            res.render('../Views/Platforms/table.ejs', {platforms: data, total: total});
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
    
    Platform.findOne({where: {id: id}})
    .then(data => {
        GamePlatform.findAll({where:{platformId: id}}).then(gameId => {
            const gameIds = [];
            gameId.forEach(element => {gameIds.push(element['gameId'])});
            Game.findAll({where:{id:{[Op.in]:gameIds}}}).then(games => {
                res.render('../Views/Platforms/details.ejs', {platform: data, games: games});
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
    
    Platform.destroy({where: {id: id}})
    .then(data => {
        GamePlatform.destroy({where: {PlatformId: id}})
        .then(pla => {
            res.redirect("/platforms");
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}