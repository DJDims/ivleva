module.exports = app => {
    const companyController = require("../Controllers/CompanyController");
    const router = require("express").Router();

    router.post("/", companyController.create);

    router.put("/:id", companyController.update);

    router.get("/", companyController.findAll);
    router.get("/:id", companyController.findById);

    router.delete("/:id", companyController.delete);
    
    app.use("/companies", router);
}