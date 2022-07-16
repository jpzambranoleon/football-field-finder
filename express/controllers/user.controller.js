const User = require("../models/user.model");

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

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
