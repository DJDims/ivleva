const Category = require("../Models/Category");

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

    const category = {
        id: req.params.id,
        title: req.body.title
    }

    Category.update(category, {where:{id: category.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Category.findAll()
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
    
    Category.findOne({where: {id: id}})
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
    
    Category.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Category.count()
    .then(data => {
        res.send(data)
    })
}