const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/validate.jwt.middleware");

// UPDATE USER
router.put("/:id", UserController.UpdateUser);
// DELETE USER
router.delete("/:id", UserController.DeleteUser);
// GET USER
router.get("/", UserController.GetUser);

router.get("/profile", validateToken, UserController.GetProfileData);

module.exports = router;
