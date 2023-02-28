module.exports = app => {
    const regionController = require("../Controllers/RegionController");
    const router = require("express").Router();
    
    router.post("/", regionController.create);

    router.put("/:id", regionController.update);

    router.get("/", regionController.findAll);
    router.get("/:id", regionController.findById);

    router.delete("/:id", regionController.delete);
    
    app.use("/region", router);
}