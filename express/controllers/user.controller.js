const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// REGISTER
exports.Register = async (req, res) => {
  try {
    // generate hashed password
    const hash = await User.hashPassword(req.body.password);
    req.body.password = hash;

    // create new user
    const newUser = new User(req.body);

    // save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).send({ error: true, message: error.message });
      return;
    }
    res.status(500).send({
      error: true,
      message: error.message,
    });
  }
};

// LOGIN
exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) throw new Error("Invalid credentials");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error.message,
    });
  }
};
