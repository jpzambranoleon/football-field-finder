const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.post("/create", postController.createPost);

router.delete("/delete/:postId", postController.deletePost);

router.get("/getPost/:postId", postController.getPost);

// Get all posts
router.get("/timeline", postController.getTimeline);

module.exports = router;
