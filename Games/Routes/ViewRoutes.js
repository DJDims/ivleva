module.exports = app => {
    const viewsController = require("../Controllers/ViewController");
    const router = require("express").Router();

    router.get("/showAddCategory", viewsController.showAddCategory);
    router.get("/showAddGame", viewsController.showAddGame);
    router.get("/showAddCompany", viewsController.showAddCompany);

    app.use("/views", router);
}