const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const categoriesController = require("../Controllers/CategoryController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.update);

    router.get("/", categoriesController.findAll);
    router.get("/:id", categoriesController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.delete);
    
    app.use("/categories", router);
}