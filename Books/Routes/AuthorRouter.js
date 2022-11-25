module.exports = app => {
    const authorController = require("../Controllers/AuthorController");
    const router = require("express").Router();

    router.post("/", authorController.create);

    router.put("/id/:id", authorController.update);

    router.get("/", authorController.findAll);
    router.get("/id/:id", authorController.findById);

    router.delete("/id/:id", authorController.delete);
    
    app.use("/authors", router);
}