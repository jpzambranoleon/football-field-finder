const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.post("/create", postController.createPost);

router.delete("/delete/:postId", postController.deletePost);

router.get("/getPost/:postId", postController.getPost);

router.get("/:forumId", postController.getForumPosts);

module.exports = router;
