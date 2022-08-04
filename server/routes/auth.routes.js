const router = require("express").Router();
const AuthController = require("../controllers/user.controller");
const { checkDuplicateEmail } = require("../middlewares/register.middleware");
const { validateToken } = require("../middlewares/validate.jwt.middleware");

// Register
router.post("/register", [checkDuplicateEmail], AuthController.Register);
// Login
router.post("/login", AuthController.Login);
// Send OTP
router.post("/send-otp", AuthController.SendOTP);
// Activate
router.post("/activate", AuthController.Activate);
// Fotgot Password
router.post("/forgot", AuthController.ForgotPassword);
// Reset Password
router.post("/rest", AuthController.ResetPassword);
// Get Profile Data
router.get("/profile", validateToken, AuthController.GetProfileData);

module.exports = router;
