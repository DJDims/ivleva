const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const reviewController = require("../Controllers/ReviewController");
    const router = require("express").Router();
    
    router.post("/review/", [authJwt.verifyToken, authJwt.isAdmin], reviewController.create);

    router.put("/review/:id", [authJwt.verifyToken, authJwt.isAdmin], reviewController.update);

    router.get("/review/", reviewController.findAll);
    router.get("/review/:id", reviewController.findById);

    router.delete("/review/:id", [authJwt.verifyToken, authJwt.isAdmin], reviewController.delete);
    
    app.use("/", router);
}