const Review = require("../Models/Review");

exports.create = (req, res) => {
    if (!req.body.reviewText || !req.body.gameUserId) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const review = {
        reviewText: req.body.reviewText,
        grade: req.body.grade,
        gameUserId: req.body.gameUserId
    }

    Review.create(review)
    .then(data => {
        res.send(data)
    })
}

exports.update = (req, res) => {
    if (!req.params.id || !req.body.reviewText || !req.body.gameUserId) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const review = {
        id: req.params.id,
        reviewText: req.body.reviewText,
        grade: req.body.grade,
        gameUserId: req.body.gameUserId
    }

    Review.update(review, {where:{id: review.id}})
    .then(data => {
        res.send(data)
    })
}

exports.findAll = (req, res) => {
    Review.findAll()
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
    
    Review.findOne({where: {id: id}})
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
    
    Review.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Review.count()
    .then(data => {
        res.send(data)
    })
}