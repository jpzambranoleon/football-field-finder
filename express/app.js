const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/users.routes");
const authRoute = require("./routes/auth.routes");

require("dotenv").config();

// create application with express
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log("Connected to MongoDB");
}
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(5200, () => {
  console.log("Server started listening on PORT : " + 5200);
});
