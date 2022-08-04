const Post = require("../models/post.model");
const User = require("../models/user.model");

// CREATE A POST
exports.SubmitPost = async (req, res) => {
  try {
    let commonPostInfo = {
      userId: req.body.userId,
      types: req.body.types,
      title: req.body.title,
      desc: req.body.desc,
      state: req.body.state,
      city: req.body.city,
      email: req.body.email,
      phone: req.body.phone,
    };

    let postsToSave = [];

    postsToSave.push(new Post(commonPostInfo));

    for (let i = 0; i < postsToSave.length; i++) {
      let post = await postsToSave[i].save();
      if (!post) throw new Error("Error while saving post");
    }

    res.status(200).json({
      success: true,
      message: "Post submitted successfully",
      post: postsToSave[0],
    });
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res.status(400).send({ error: true, message: err.message });
    }
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

// UPDATE A POST
exports.UpdatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (post.userId !== req.body.userId)
      throw new Error("You can update only your post");

    await post.updateOne({ $set: req.body.data });

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

// DELETE A POST
exports.DeletePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) throw new Error("Invalid post");

    await post.deleteOne();

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

// GET A POST
exports.GetPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET TIMELINE
exports.GetTimelinePosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET USER'S ALL POSTS
exports.GetUserPostsAll = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
