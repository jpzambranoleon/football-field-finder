const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Register a user
exports.register = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Check if any required field is missing
    if (!email || !req.body.password) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide all required fields" });
    }

    if (req.body.password.length < 8) {
      return res.status(400).json({
        error: true,
        message: "Password must be at least 8 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Generate verification token
    const verificationToken = jwt.sign(
      { username: req.body.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Create user object
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user object
    await user.save();

    const { password, ...others } = user._doc;

    // Send verification email
    // req.body = { email, verificationToken };
    // await sendVerificationEmail(req, res);

    res
      .status(201)
      .json({ success: true, message: "Account created", user: { ...others } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    // Check if email and password are provided
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide email and password" });
    }

    // Check if user exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    // Check if user's account is verified
    /*
    if (!user.isVerified) {
      return res
        .status(401)
        .json({ message: "Please verify your email address" });
    } */

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const { password, ...others } = user._doc;

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // only send cookie over HTTPS in production
        sameSite: "strict", // disallow sending cookie on cross-origin requests
      })
      .status(200)
      .json({ success: true, message: "Login success", user: { ...others } });
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error.message,
    });
  }
};
