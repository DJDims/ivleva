const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const reviewController = require("../Controllers/ReviewController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], reviewController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], reviewController.update);

    router.get("/", reviewController.findAll);
    router.get("/:id", reviewController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], reviewController.delete);
    
    app.use("/review", router);
}