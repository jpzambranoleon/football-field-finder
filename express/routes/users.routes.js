const router = require("express").Router();
const UserController = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", UserController.UpdateUser);

module.exports = router;
