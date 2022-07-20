const router = require("express").Router();
const PostController = require("../controllers/post.controller");

// Submit a Post
router.post("/", PostController.Submit);
// Update a Post
router.put("/:id", PostController.UpdatePost);
// Delete a Post
router.delete("/:id", PostController.DeletePost);

module.exports = router;
