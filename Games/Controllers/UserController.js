const User = require("../Models/User");

exports.create = (req, res) => {
    if (!req.body.nick 
        || !req.body.password 
        || !req.body.region 
        || !req.body.birthDate) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const user = {
        nick: req.body.nick,
        password: req.body.password,
        wallet: req.body.wallet,
        avatar: req.body.avatar,
        region: req.body.region,
        birthDate: req.body.birthDate
    }

    User.create(user)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id 
        || !req.body.nick 
        || !req.body.password 
        || !req.body.region 
        || !req.body.birthDate) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const user = {
        id: req.params.id,
        nick: req.body.nick,
        password: req.body.password,
        wallet: req.body.wallet,
        avatar: req.body.avatar,
        region: req.body.region,
        birthDate: req.body.birthDate
    }

    User.update(user, {where:{id: user.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    User.findAll()
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
    
    User.findOne({where: {id: id}})
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
    
    User.destroy({where: {id: id}})
}

exports.count = (req, res) => {
    User.count()
    .then(data => {
        res.send(data)
    })
}