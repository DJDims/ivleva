module.exports = app => {
    const bundleController = require("../Controllers/BundleController");
    const router = require("express").Router();

    router.post("/", bundleController.create);

    router.put("/:id", bundleController.update);

    router.get("/", bundleController.findAll);
    router.get("/:id", bundleController.findById);

    router.delete("/:id", bundleController.delete);
    
    app.use("/bundles", router);
}