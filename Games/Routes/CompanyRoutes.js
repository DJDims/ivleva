const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const companyController = require("../Controllers/CompanyController");
    const router = require("express").Router();

    router.post("/companies/", [authJwt.verifyToken, authJwt.isAdmin], companyController.create);

    router.put("/companies/:id", [authJwt.verifyToken, authJwt.isAdmin], companyController.update);

    router.get("/companies/", companyController.findAll);
    router.get("/companies/:id", companyController.findById);

    router.delete("/companies/:id", [authJwt.verifyToken, authJwt.isAdmin], companyController.delete);
    
    app.use("/", router);
}

