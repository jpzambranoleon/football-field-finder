const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const MongooseConnection = require("./utility/mongoose.connection");
const morgan = require("morgan");
const userRoute = require("./routes/users.routes");
const authRoute = require("./routes/auth.routes");
const postRoute = require("./routes/posts.routes");

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

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5200, () => {
  console.log("Server started listening on PORT : " + 5200);
});
