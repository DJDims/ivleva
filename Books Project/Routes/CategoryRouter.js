module.exports = app => {
    const categories = require("../Controllers/CategoryController");
    const router = require("express").Router();

    router.post("/", categories.create);
    router.get("/", categories.findAll);
    
    app.use('/api/categories', router)
}