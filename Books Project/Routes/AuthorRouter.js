module.exports = app => {
    const authors = require("../Controllers/AuthorController");
    const router = require("express").Router();

    // router.post("/", authors.create);
    router.get("/all", authors.getAllAuthors);
    
    app.use('/api/authors', router)
}