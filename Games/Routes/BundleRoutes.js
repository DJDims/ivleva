const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const bundleController = require("../Controllers/BundleController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], bundleController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], bundleController.update);

    router.get("/", bundleController.findAll);
    router.get("/:id", bundleController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], bundleController.delete);
    
    app.use("/bundles", router);
}