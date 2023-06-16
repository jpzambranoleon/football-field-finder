const router = require("express").Router();
const userController = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");

// Update user
router.put(
  "/update/:userId",
  upload.single("image"),
  userController.updateUser
);

router.put("/changePassword/:userId", userController.changePassword);

router.get("/", userController.getUser);

module.exports = router;
