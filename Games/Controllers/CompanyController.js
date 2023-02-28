const Company = require("../Models/Company");

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const company = {
        title: req.body.title
    }

    Company.create(company)
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

    const company = {
        id: req.params.id,
        title: req.body.title
    }

    Company.update(company, {where:{id: company.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Company.findAll()
    .then(data => {
        res.render(data);
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
    
    Company.findOne({where: {id: id}})
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
    
    Company.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Company.count()
    .then(data => {
        res.send(data)
    })
}