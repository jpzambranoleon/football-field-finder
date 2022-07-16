const router = require("express").Router();
const AuthController = require("../controllers/user.controller");
const { checkDuplicateEmail } = require("../middlewares/register.middleware");

// Register
router.post("/register", [checkDuplicateEmail], AuthController.Register);
router.post("/login", AuthController.Login);

module.exports = router;
