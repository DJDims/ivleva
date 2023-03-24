const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const gameController = require("../Controllers/GameController");
    const router = require("express").Router();

    router.post("/games/", [authJwt.verifyToken, authJwt.isAdmin], gameController.create);

    router.put("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.update);

    router.get("/games/", gameController.findAll);
    router.get("/games/:id", gameController.findById);
    router.get("/games/company/:company", gameController.findByCompany);
    router.get("/games/category/:category", gameController.findByCategory);
    router.get("/games/bundle/:bundle", gameController.findByBundle);

    router.delete("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.delete);
    
    app.use("/", router);
}