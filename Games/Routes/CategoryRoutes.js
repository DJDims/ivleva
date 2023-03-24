const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const categoriesController = require("../Controllers/CategoryController");
    const router = require("express").Router();

    router.post("/categories/", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.create);

    router.put("/categories/:id", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.update);

    router.get("/categories/", categoriesController.findAll);
    router.get("/categories/:id", categoriesController.findById);

    router.delete("/categories/:id", [authJwt.verifyToken, authJwt.isAdmin], categoriesController.delete);
    
    app.use("/", router);
}