const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const MongooseConnection = require("./utility/mongoose.connection");
const morgan = require("morgan");

// connect to database
require("dotenv").config();
MongooseConnection();

// create application with express
const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/post", require("./routes/posts.routes"));

app.listen(5200, () => {
  console.log("Server started listening on PORT : " + 5200);
});
