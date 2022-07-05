const Post = require("../models/post.model");
const City = require("../models/city.model");
const getCoordinates = require("../utility/getCoordinates");
const { FetchMapaHelp } = require("../utility/fetchMapaHelp");

exports.submit = async (req, res) => {
  try {
    // new Post(req.body).save();
    console.log(req.body);
    console.log("It came here");
    res.status(200).json({
      success: true,
      message: "Post submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

exports.deactivate = async (req, res) => {
  try {
    let { post_id } = req.body;
    let post = await Post.findById(post_id);

    if (!post || !post.active) throw new Error("Invalid post");
    if (post.author.toString() !== req.user.id) throw new Error("You are not authorized to deactivate this post");

    post.active = false;
    await post.save();

    res.status(200).json({
      success: true,
      message: "Post deactivated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    let page = req.query.page || 1;
    let amountOnPage = 10;
    let searchCondition = { active: true };
    let HelpTypes = await HelpType.find({});

    if (req.query.city && req.query.city !== "all") {
      searchCondition.city = req.query.city;
    }

    let { Accomodation, Transportation, Other } = req.query;

    let types = [];
    if (Accomodation === "true") types.push(HelpTypes.find((type) => type.name === "Accomodation")._id);
    if (Transportation === "true") types.push(HelpTypes.find((type) => type.name === "Transportation")._id);
    if (Other === "true") types.push(HelpTypes.find((type) => type.name === "Other")._id);

    searchCondition.type = { $in: types };

    let posts = await Post.find(searchCondition)
      .select("-contact")
      .sort({ _id: -1 })
      .skip((page - 1) * amountOnPage)
      .limit(amountOnPage)
      .populate(["type", "city"])
      .populate("author", "name");

    //Integration with MapaHelpmap
    let MapaHelpPosts = await FetchMapaHelp();

    if (searchCondition.city) {
      MapaHelpPosts = MapaHelpPosts.filter((post) => {
        return post.city._id?.toString() === searchCondition.city;
      });
    }

    MapaHelpPosts = MapaHelpPosts.filter((post) => {
      return types.some((type) => type.toString() === post.type._id.toString());
    });

    let totalPosts = await Post.countDocuments({});
    totalPosts += MapaHelpPosts.length;

    //Paginating MapaHelpPosts
    MapaHelpPosts = MapaHelpPosts.slice((page - 1) * (amountOnPage - posts.length), page * (amountOnPage - posts.length));

    let totalPages = Math.ceil(totalPosts / amountOnPage);

    res.status(200).json({
      success: true,
      posts: [...posts, ...MapaHelpPosts],
      totalPages: totalPages,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

exports.getPost = async (req, res) => {
  let postId = req.params.id;
  try {
    let post;
    if (postId.includes("mapa")) {
      let MapaHelpPosts = await FetchMapaHelp();
      post = MapaHelpPosts.find((post) => post._id === postId);
      if (!post) throw new Error("Invalid post");
      return res.status(200).send({
        success: true,
        post,
      });
    } else {
      post = await Post.findById(postId).populate(["type", "city"]).populate("author", "name").exec();
    }
    if (!post || !post.active) throw new Error("Invalid post");
    if (!req.user) {
      for (let key in post.contact) {
        if (!post.contact[key].public) {
          post.contact[key].value = "";
        }
      }
    }
    res.status(200).json({
      success: true,
      post: post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

exports.getOnlyOwnPosts = async (req, res) => {
  try {
    let posts = await Post.find({ author: req.user.id, active: true }).sort({ _id: -1 }).populate(["type", "city"]).populate("author", "name");

    return res.status(200).json({
      success: true,
      posts: posts,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

exports.fetchOptions = async (req, res) => {
  try {
    let cities = await City.find({});
    let helpTypes = await HelpType.find({});

    if (!cities || !helpTypes) throw new Error("Cannot fetch options");

    res.status(200).json({
      success: true,
      cities: cities,
      helpTypes: helpTypes,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};
