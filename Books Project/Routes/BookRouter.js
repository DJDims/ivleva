module.exports = app => {
    const books = require("../Controllers/BookController");
    const router = require("express").Router();

    router.post("/", books.create);
    router.get("/", books.findAll);
    
    app.use('/api/books', router)
}