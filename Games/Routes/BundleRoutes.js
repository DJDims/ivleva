const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const bundleController = require("../Controllers/BundleController");
    const router = require("express").Router();

    router.post("/bundles/", [authJwt.verifyToken, authJwt.isAdmin], bundleController.create);

    router.put("/bundles/:id", [authJwt.verifyToken, authJwt.isAdmin], bundleController.update);

    router.get("/bundles/", bundleController.findAll);
    router.get("/bundles/:id", bundleController.findById);

    router.delete("/bundles/:id", [authJwt.verifyToken, authJwt.isAdmin], bundleController.delete);
    
    app.use("/", router);
}