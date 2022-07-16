const router = require("express").Router();
const PostController = require("../controllers/post.controller");

router.post("/", PostController.Submit);
router.put("/:id", PostController.UpdatePost);
router.delete("/:id", PostController.DeletePost);

module.exports = router;
