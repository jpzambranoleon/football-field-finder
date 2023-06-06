const router = require("express").Router();
const multer = require("multer");
const userController = require("../controllers/user.controller");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configuration
cloudinary.config({
  cloud_name: "dclmwfnbr",
  api_key: "252447426673796",
  api_secret: "2PEJk4lf4LE2HUX0YJlrF3OVMnM",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
  },
});

const upload = multer({ storage: storage });

// Update user
router.post("/upload", upload.single("image"), async (req, res) => {
  return res.json({ picture: req.file.path });
});

router.put("/update/:userId", userController.updateUser);

router.put("/changePassword/:userId", userController.changePassword);

router.get("/", userController.getUser);

module.exports = router;
