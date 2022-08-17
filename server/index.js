const express = require("express");
const helmet = require("helmet");
const MongooseConnection = require("./utility/mongoose.connection");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

// Create application with express
const app = express();

// Connect to database
require("dotenv").config();
MongooseConnection();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: fileStorageEngine });
app.post("/api/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single file upload success");
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/posts", require("./routes/posts.routes"));

app.listen(8800, () => {
  console.log("Backend server is running!");
});
