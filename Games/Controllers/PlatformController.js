const Platform = require("../Models/Platform");

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
        res.send(data)
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
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Platform.findAll()
    .then(data => {
        res.send(data);
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
        res.send(data);
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
        res.send(data)
    })
}

exports.count = (req, res) => {
    Platform.count()
    .then(data => {
        res.send(data)
    })
}