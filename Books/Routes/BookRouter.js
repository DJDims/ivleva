module.exports = app => {
    const bookController = require("../Controllers/BookController");
    const router = require("express").Router();

    router.post("/", bookController.create);

    router.put("/id/:id", bookController.update);

    router.get("/", bookController.findAll);
    router.get("/id/:id", bookController.findById);
    router.get("/title", bookController.findByTitle);
    router.get("/authorId/:authorId", bookController.findByAuthor);
    router.get("/categoryId/:categoryId", bookController.findByCategory);

    router.delete("/id/:id", bookController.delete);
    
    app.use("/books", router);
}