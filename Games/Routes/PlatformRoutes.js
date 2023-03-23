const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const platformController = require("../Controllers/PlatformController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], platformController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], platformController.update);

    router.get("/", platformController.findAll);
    router.get("/:id", platformController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], platformController.delete);
    
    app.use("/platforms", router);
}