const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const gameController = require("../Controllers/GameController");
    const router = require("express").Router();

    router.post("/games/", [authJwt.verifyToken, authJwt.isAdmin], gameController.create);

    router.put("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.update);
    router.put("/games/addCompanies/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addCompanies);         //Добавить компании к игре
    router.put("/games/removeCompanies/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removeCompanies);   //Убрать компании из игры
    router.put("/games/addCategories/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addCategories);       //Добавить категории к игре
    router.put("/games/removeCategories/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removeCategories); //Убрать категории из игры
    router.put("/games/addPlatforms/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.addPlatforms);         //Добавить платформы к игре
    router.put("/games/removePlatforms/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.removePlatforms);   //Убрать платформы из игры

    router.get("/games/", gameController.findAll);
    router.get("/games/:id", gameController.findById);
    router.get("/games/company/:company", gameController.findByCompany);    //Поиск игр по компании
    router.get("/games/category/:category", gameController.findByCategory); //Поиск игр по категории
    router.get("/games/bundle/:bundle", gameController.findByBundle);       //Поиск игр по бандлу
    router.get("/games/platform/:platform", gameController.findByPlatform); //Поиск игр по платформе

    router.delete("/games/:id", [authJwt.verifyToken, authJwt.isAdmin], gameController.delete);
    
    app.use("/", router);
}