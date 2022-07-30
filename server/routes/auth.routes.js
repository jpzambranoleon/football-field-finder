const router = require("express").Router();
const AuthController = require("../controllers/user.controller");
const { checkDuplicateEmail } = require("../middlewares/register.middleware");
const { validateToken } = require("../middlewares/validate.jwt.middleware");

// Register
router.post("/register", [checkDuplicateEmail], AuthController.Register);
// Login
router.post("/login", AuthController.Login);
// Get Profile Data
router.get("/profile", validateToken, AuthController.GetProfileData);

module.exports = router;
