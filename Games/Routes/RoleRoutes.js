module.exports = app => {
    const roleController = require("../Controllers/RoleController");
    const router = require("express").Router();
    
    router.post("/", roleController.create);

    router.put("/:id", roleController.update);

    router.get("/", roleController.findAll);
    router.get("/:id", roleController.findById);

    router.delete("/:id", roleController.delete);
    
    app.use("/role", router);
}