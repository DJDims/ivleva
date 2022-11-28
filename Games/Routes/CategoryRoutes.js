module.exports = app => {
    const categoriesController = require("../Controllers/CategoryController");
    const router = require("express").Router();

    router.post("/", categoriesController.create);

    router.put("/:id", categoriesController.update);

    router.get("/", categoriesController.findAll);
    router.get("/:id", categoriesController.findById);

    router.delete("/:id", categoriesController.delete);
    
    app.use("/categories", router);
}