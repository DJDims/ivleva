const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const gameController = require("../Controllers/GameController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], gameController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.update);

    router.get("/", gameController.findAll);
    router.get("/:id", gameController.findById);
    router.get("/company/:company", gameController.findByCompany);
    router.get("/category/:category", gameController.findByCategory);
    router.get("/bundle/:bundle", gameController.findByBundle);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.delete);
    
    app.use("/games", router);
}