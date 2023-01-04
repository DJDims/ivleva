module.exports = app => {
    const adminController = require("../Controllers/AdminController");
    const router = require("express").Router();

    router.get("/fillExampleData", adminController.fillExampleData);

    app.use("/admin", router);
}