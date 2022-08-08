const router = require("express").Router();
const PostController = require("../controllers/post.controller");

// Submit a Post
router.post("/submit", PostController.submitPost);
// Update a Post
router.put("/update/:id", PostController.updatePost);
// Delete a Post
router.delete("/delete/:id", PostController.deletePost);

router.get("/get_all", PostController.getAll);

// Get a Post
router.get("/get/:id", PostController.getPost);

// Get Timeline of User Posts
router.get("/profile/:username", PostController.getUserPostsAll);

// Get Timeline of All Posts
router.get("/timeline/all", PostController.getTimelinePosts);

module.exports = router;
