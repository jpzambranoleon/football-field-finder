const router = require("express").Router();
const UserController = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", UserController.UpdateUser);
// DELETE USER
router.delete("/:id", UserController.DeleteUser);
// GET USER
router.get("/:id", UserController.GetUser);

module.exports = router;
