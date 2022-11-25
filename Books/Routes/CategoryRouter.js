module.exports = app => {
    const CategoryController = require("../Controllers/CategoryController");
    const router = require("express").Router();

    router.post("/", CategoryController.create);

    router.put("/id/:id", CategoryController.update);

    router.get("/", CategoryController.findAll);
    router.get("/id/:id", CategoryController.findById);

    router.delete("/id/:id", CategoryController.delete);
    
    app.use("/categories", router);
}