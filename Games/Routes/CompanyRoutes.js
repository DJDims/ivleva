const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const companyController = require("../Controllers/CompanyController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], companyController.create);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], companyController.update);

    router.get("/", companyController.findAll);
    router.get("/:id", companyController.findById);

    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], companyController.delete);
    
    app.use("/companies", router);
}