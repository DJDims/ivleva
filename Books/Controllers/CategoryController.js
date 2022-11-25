const Category = require("../Models/Category");

exports.create = (req, res) => {
    if (!req.body.categoryName) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const category = {
        categoryName: req.body.categoryName,
    }

    Category.create(category)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.categoryName) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const id = req.params.id;
    const categoryName = req.body.categoryName;

    Category.update({categoryName: categoryName}, {where: {id: id}})
    .then(data => {
        res.send(data)
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
        res.send(data)
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

    Category.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}