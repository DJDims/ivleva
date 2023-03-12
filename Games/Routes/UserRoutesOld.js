module.exports = app => {
    const userController = require("../Controllers/UserController");
    const router = require("express").Router();
    
    router.post("/", userController.create);

    router.put("/:id", userController.update);

    router.get("/", userController.findAll);
    router.get("/:id", userController.findById);

    router.delete("/:id", userController.delete);
    
    app.use("/user", router);
}