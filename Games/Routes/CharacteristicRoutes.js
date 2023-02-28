module.exports = app => {
    const characteristicController = require("../Controllers/CharacteristicController");
    const router = require("express").Router();
    
    router.post("/", characteristicController.create);

    router.put("/:id", characteristicController.update);

    router.get("/", characteristicController.findAll);
    router.get("/:id", characteristicController.findById);

    router.delete("/:id", characteristicController.delete);
    
    app.use("/characteristic", router);
}