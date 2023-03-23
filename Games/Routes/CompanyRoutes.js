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

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the company
 *         title:
 *           type: string
 *           description: The title of company
 *       example:
 *         id: 1
 *         title: Wube Software
 * /companies:
 *    post:
 *      content:
 *          
 */