const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/validate.jwt.middleware");

router.put("/set", UserController.setPublicInfo);
// UPDATE USER
router.put("/update/:id", UserController.updateUser);
// DELETE USER
router.delete("/:id", UserController.deleteUser);
// GET USER
router.get("/", UserController.getUser);

router.get("/profile", validateToken, UserController.getProfileData);

module.exports = router;
