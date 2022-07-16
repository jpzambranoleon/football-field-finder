const router = require("express").Router();
const PostController = require("../controllers/post.controller");

router.post("/", PostController.Post);

module.exports = router;
