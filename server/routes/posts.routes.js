const router = require("express").Router();
const PostController = require("../controllers/post.controller");

// Submit a Post
router.post("/submit", PostController.SubmitPost);
// Update a Post
router.put("/update/:id", PostController.UpdatePost);
// Delete a Post
router.delete("/delete/:id", PostController.DeletePost);
// Get a Post
router.get("/get/:id", PostController.GetPost);

// Get Timeline of User Posts
router.get("/profile/:username", PostController.GetUserPostsAll);

// Get Timeline of All Posts
router.get("/timeline/all", PostController.GetTimelinePosts);

module.exports = router;
