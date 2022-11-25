const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Book = require("../Models/Book");
const Author = require("../Models/Author");
const Book_author = require("../Models/Book_author");
const Book_category = require("../Models/Book_category");


exports.create = (req, res) => {
    if (!req.body.title || !req.body.isbn || !req.body.pageCount || !req.body.publishedDate || !req.body.thumbnailUrl || !req.body.shortDescription || !req.body.longDescription || !req.body.status) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status
    }

    Book.create(book)
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
    if (!req.params.id || !req.body.title || !req.body.isbn || !req.body.pageCount || !req.body.publishedDate || !req.body.thumbnailUrl || !req.body.shortDescription || !req.body.longDescription || !req.body.status) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

        const id = req.params.id;
        const title = req.body.title;
        const isbn = req.body.isbn;
        const pageCount = req.body.pageCount;
        const publishedDate = req.body.publishedDate;
        const thumbnailUrl = req.body.thumbnailUrl;
        const shortDescription = req.body.shortDescription;
        const longDescription = req.body.longDescription;
        const status = req.body.status;

    Book.update({title: title, isbn: isbn, pageCount: pageCount, publishedDate: publishedDate, thumbnailUrl: thumbnailUrl, shortDescription: shortDescription, longDescription: longDescription, status: status}, {where:{id: id}})
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
    Book.findAll()
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
    
    Book.findOne({where: {id: id}})
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
    
    Book.destroy({where: {id: id}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findByTitle = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const title = req.body.title;

    Book.findAll({where: {title: {[Op.like]: `%${title}%`}}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findByTitle = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const title = req.body.title;

    Book.findAll({where: {title: {[Op.like]: `%${title}%`}}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findByAuthor = (req, res) => {
    if (!req.params.authorId) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const authorId = req.params.authorId;

    Book.findAll({include: Author})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}

exports.findByCategory = (req, res) => {
    if (!req.params.categoryId) {
        res.status(400).send({
            message: "Content can't be empty"
        })
        return;
    }

    const authorId = req.params.authorId;

    Book.findAll({include: Author})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error)"
        })
    })
}