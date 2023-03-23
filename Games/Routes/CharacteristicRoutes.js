const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const characteristicController = require("../Controllers/CharacteristicController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.update);

    router.get("/", characteristicController.findAll);
    router.get("/:id", characteristicController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.delete);
    
    app.use("/characteristic", router);
}