const router = require("express").Router();
const userController = require("../controllers/user.controller");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
//const upload = require("../middlewares/multer.middleware");
const { handleImageUpload } = require("../middlewares/multer.middleware");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
  },
});

const upload = multer({ storage: storage });

router.put("/upload", upload.single("image"), userController.uploadImage);

// Update user
router.put(
  "/update/:userId",
  upload.single("image"),
  userController.updateUser
);

router.put("/changePassword/:userId", userController.changePassword);

router.get("/", userController.getUser);

module.exports = router;
