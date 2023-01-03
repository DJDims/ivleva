module.exports = app => {
    const platformController = require("../Controllers/PlatformController");
    const router = require("express").Router();

    router.post("/", platformController.create);

    router.put("/:id", platformController.update);

    router.get("/", platformController.findAll);
    router.get("/:id", platformController.findById);

    router.delete("/:id", platformController.delete);
    
    app.use("/platforms", router);
}