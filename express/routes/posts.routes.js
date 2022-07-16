const router = require("express").Router();
const PostController = require("../controllers/post.controller");

router.post("/", PostController.Submit);

module.exports = router;
