const { register, login } = require("../controllers/userController.js");
const verify = require("../middleware/verify");

function userRoutes(app) {
  // register
  app.post("/api/register", register);

  // login
  app.post("/api/login", verify, login);
}

module.exports = userRoutes;
