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

// UPDATE USER
exports.UpdateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

// DELETE USER
exports.DeleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
};
