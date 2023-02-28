const Region = require("../Models/Region");

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const region = {
        name: req.body.name,
    }

    Region.create(region)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const region = {
        id: req.params.id,
        name: req.body.name,
    }

    Region.update(region, {where:{id: region.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Region.findAll()
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
    
    Region.findOne({where: {id: id}})
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
    
    Region.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Region.count()
    .then(data => {
        res.send(data)
    })
}