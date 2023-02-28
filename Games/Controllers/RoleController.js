const Role = require("../Models/Role");

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const role = {
        name: req.body.name
    }
    console.log('lolkek');

    Role.create(role)
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

    const role = {
        id: req.params.id,
        name: req.body.name
    }

    Role.update(role, {where:{id: role.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Role.findAll()
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
    
    Role.findOne({where: {id: id}})
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
    
    Role.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Role.count()
    .then(data => {
        res.send(data)
    })
}