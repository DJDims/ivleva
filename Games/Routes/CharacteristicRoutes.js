const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const characteristicController = require("../Controllers/CharacteristicController");
    const router = require("express").Router();
    
    router.post("/characteristic/", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.create);

    router.put("/characteristic/:id", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.update);

    router.get("/characteristic/", characteristicController.findAll);
    router.get("/characteristic/:id", characteristicController.findById);

    router.delete("/characteristic/:id", [authJwt.verifyToken, authJwt.isAdmin], characteristicController.delete);
    
    app.use("/", router);
}