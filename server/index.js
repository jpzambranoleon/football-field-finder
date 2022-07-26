const express = require("express");
const helmet = require("helmet");
const MongooseConnection = require("./utility/mongoose.connection");
const morgan = require("morgan");

// Create application with express
const app = express();

// Connect to database
require("dotenv").config();
MongooseConnection();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800, () => {
  console.log("Backend server is running!");
});
