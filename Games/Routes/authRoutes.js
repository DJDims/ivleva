const verifySignUp = require("../middleware/verifySignUp");
const controller = require("../Controllers/authController");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/auth/signup",
    [
      verifySignUp.checkDuplicateUsername,
      verifySignUp.checkRoleExisted,
      verifySignUp.checkRegionExisted
    ],
    controller.signup
  );

  app.post("/auth/signin", controller.signin);
};