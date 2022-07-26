const express = require("express");
const helmet = require("helmet");
const MongooseConnection = require("./utility/mongoose.connection");
const cors = require("cors");
const morgan = require("morgan");

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

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/posts", require("./routes/posts.routes"));

app.listen(8800, () => {
  console.log("Backend server is running!");
});
