const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const roleController = require("../Controllers/RoleController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], roleController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], roleController.update);

    router.get("/", roleController.findAll);
    router.get("/:id", roleController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], roleController.delete);
    
    app.use("/role", router);
}