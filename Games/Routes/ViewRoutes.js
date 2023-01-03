module.exports = app => {
    const viewsController = require("../Controllers/ViewController");
    const router = require("express").Router();

    router.get("/showAddCategory", viewsController.showAddCategory);
    router.get("/showAddGame", viewsController.showAddGame);
    router.get("/showAddCompany", viewsController.showAddCompany);
    router.get("/showAddPlatform", viewsController.showAddPlatform);

    router.get("/showDeleteCategory/:id", viewsController.showDeleteCategory);
    router.get("/showDeleteGame/:id", viewsController.showDeleteGame);
    router.get("/showDeleteCompany/:id", viewsController.showDeleteCompany);
    router.get("/showDeletePlatform/:id", viewsController.showDeletePlatform);

    app.use("/views", router);
}