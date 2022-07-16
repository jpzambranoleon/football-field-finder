const router = require("express").Router();
const PostController = require("../controllers/post.controller");

router.post("/submit", PostController.Submit);

module.exports = router;
