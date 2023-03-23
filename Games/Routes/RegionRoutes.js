const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const regionController = require("../Controllers/RegionController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], regionController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], regionController.update);

    router.get("/", regionController.findAll);
    router.get("/:id", regionController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], regionController.delete);
    
    app.use("/region", router);
}