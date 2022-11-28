const Game = require("../Models/Game");

exports.create = (req, res) => {
    if (!req.body.title || !req.body.publishYear || !req.body.poster || !req.body.description) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        title: req.body.title,
        publishYear: req.body.publishYear,
        poster: req.body.poster,
        description: req.body.description
    }

    Game.create(game)
    .then(data => {
        res.redirect("/games");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title || !req.body.publishYear || !req.body.poster || !req.body.description) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const game = {
        id: req.params.id,
        title: req.body.title,
        publishYear: req.body.publishYear,
        poster: req.body.poster,
        description: req.body.description
    }

    Game.update(game, {where:{id: game.id}})
    .then(data => {
        res.redirect("/games");
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
        res.render('../Views/Games/gamesTable.ejs', {games: data});
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
    .then(data => {
        res.send(data)
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
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}