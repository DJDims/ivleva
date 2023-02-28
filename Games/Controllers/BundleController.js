const Bundle = require("../Models/Bundle");

exports.create = (req, res) => {
    if (!req.body.title || ! req.body.price) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const bundle = {
        title: req.body.title,
        price: req.body.price
    }

    Bundle.create(bundle)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.title || !req.body.price) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const bundle = {
        id: req.params.id,
        title: req.body.title,
        price : req.body.price
    }

    Bundle.update(bundle, {where:{id: bundle.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Bundle.findAll()
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
    
    Bundle.findOne({where: {id: id}})
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
    
    Bundle.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Bundle.count()
    .then(data => {
        res.send(data)
    })
}