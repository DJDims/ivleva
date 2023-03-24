const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const roleController = require("../Controllers/RoleController");
    const router = require("express").Router();
    
    router.post("/role/", [authJwt.verifyToken, authJwt.isAdmin], roleController.create);

    router.put("/role/:id", [authJwt.verifyToken, authJwt.isAdmin], roleController.update);

    router.get("/role/", roleController.findAll);
    router.get("/role/:id", roleController.findById);

    router.delete("/role/:id", [authJwt.verifyToken, authJwt.isAdmin], roleController.delete);
    
    app.use("/", router);
}