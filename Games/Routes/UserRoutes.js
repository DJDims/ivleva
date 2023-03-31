// module.exports = app => {
//     const userController = require("../Controllers/UserController");
//     const router = require("express").Router();
    
//     router.post("/user/", userController.create);

//     router.put("/user/:id", userController.update);

//     router.get("/user/", userController.findAll);
//     router.get("/user/:id", userController.findById);

//     router.delete("/user/:id", userController.delete);
    
//     app.use("/", router);
// }