const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const platformController = require("../Controllers/PlatformController");
    const router = require("express").Router();

    router.post("/platforms/", [authJwt.verifyToken, authJwt.isAdmin], platformController.create);

    router.put("/platforms/:id", [authJwt.verifyToken, authJwt.isAdmin], platformController.update);

    router.get("/platforms/", platformController.findAll);
    router.get("/platforms/:id", platformController.findById);

    router.delete("/platforms/:id", [authJwt.verifyToken, authJwt.isAdmin], platformController.delete);
    
    app.use("/", router);
}