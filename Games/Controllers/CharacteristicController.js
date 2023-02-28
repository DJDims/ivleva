const Characteristic = require("../Models/Characteristic");

exports.create = (req, res) => {
    if (!req.body.title || !req.body.type) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const characteristic = {
        title: req.body.title,
        type: req.body.type
    }

    Characteristic.create(characteristic)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title || !req.body.type) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const characteristic = {
        id: req.params.id,
        title: req.body.title,
        type: req.body.type
    }

    Characteristic.update(characteristic, {where:{id: characteristic.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Characteristic.findAll()
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
    
    Characteristic.findOne({where: {id: id}})
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
    
    Characteristic.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Characteristic.count()
    .then(data => {
        res.send(data)
    })
}