const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const gameController = require("../Controllers/GameController");
    const router = require("express").Router();

    router.post("/games/", [authJwt.verifyToken, authJwt.isAdmin], gameController.create);

    router.put("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.update);
    router.put("/games/addCompanies/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addCompanies);
    router.put("/games/removeCompanies/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removeCompanies);
    router.put("/games/addCategories/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addCategories);
    router.put("/games/removeCategories/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removeCategories);
    router.put("/games/addPlatforms/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addPlatforms);
    router.put("/games/removePlatforms/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removePlatforms);

    router.get("/games/", gameController.findAll);
    router.get("/games/:id", gameController.findById);
    router.get("/games/company/:company", gameController.findByCompany);
    router.get("/games/category/:category", gameController.findByCategory);
    router.get("/games/bundle/:bundle", gameController.findByBundle);
    router.get("/games/platform/:platform", gameController.findByPlatform);

    router.delete("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.delete);
    
    app.use("/", router);
}