const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJwt } = require("../utility/generateJwt");

// REGISTER
exports.Register = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.email) throw new Error("Cannot signup without an email");
    if (!req.body.username) throw new Error("Cannot signup without a username");
    if (!req.body.firstname || !req.body.lastname)
      throw new Error("Cannot signup without first name and last name");

    // generate hashed password
    const hash = await User.hashPassword(req.body.password);
    req.body.password = hash;

    // create new user
    const newUser = new User(req.body);
    // save new user
    await newUser.save();

    const { error, token } = await generateJwt(newUser.name, newUser._id);
    if (error)
      throw new Error("Couldn't create access token. Please try again later");

    newUser.accessToken = token;

    await newUser.save();

    res.status(200).send({
      success: true,
      message: "Registration Success",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send({ error: true, message: err.message });
      return;
    }
    res.status(500).send({
      error: true,
      message: err.message,
    });
  }
};

// LOGIN
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please make a valid request");

    const user = await User.findOne({ email: email });
    if (!user) throw new Error("User not found");

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) throw new Error("Invalid credentials");

    const { error, token } = await generateJwt(user.name, user._id);
    if (error)
      throw new Error("Couldn't create access token. Please try again later.");

    user.accessToken = token;

    await user.save();

    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({
      error: true,
      message: err.message,
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

// GET A USER
exports.GetUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};
