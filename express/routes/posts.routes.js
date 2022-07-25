const router = require("express").Router();
const PostController = require("../controllers/post.controller");

// Submit a Post
router.post("/", PostController.Submit);
// Update a Post
router.put("/:id", PostController.UpdatePost);
// Delete a Post
router.delete("/:id", PostController.DeletePost);
// Get a Post
router.get("/:id", PostController.GetPost);
// Get Timeline of User Posts
router.get("/timeline/user", PostController.GetTimeline);

module.exports = router;
