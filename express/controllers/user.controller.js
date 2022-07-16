const User = require("../models/user.model");

exports.Register = async (req, res) => {
  try {
    // generate hashed password
    const hash = await User.hashPassword(req.body.hashPassword);
    req.body.password = hash;

    // create new user
    const newUser = new User(req.body);

    // save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(err);
  }
};
