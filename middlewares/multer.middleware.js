const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configuration
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

exports.handleImageUpload = async (req, res, next) => {
  console.log(req);
  if (req.file) {
    upload.single("image")(req, res, next);
  } else {
    next();
  }
};

//module.exports = handleImageUpload;
