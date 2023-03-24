const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const regionController = require("../Controllers/RegionController");
    const router = require("express").Router();
    
    router.post("/region/", [authJwt.verifyToken, authJwt.isAdmin], regionController.create);

    router.put("/region/:id", [authJwt.verifyToken, authJwt.isAdmin], regionController.update);

    router.get("/region/", regionController.findAll);
    router.get("/region/:id", regionController.findById);

    router.delete("/region/:id", [authJwt.verifyToken, authJwt.isAdmin], regionController.delete);
    
    app.use("/", router);
}