module.exports = app => {
    const gameController = require("../Controllers/GameController");
    const router = require("express").Router();

    router.post("/", gameController.create);

    router.put("/:id", gameController.update);

    router.get("/", gameController.findAll);
    router.get("/:id", gameController.findById);

    router.delete("/:id", gameController.delete);
    
    app.use("/games", router);
}