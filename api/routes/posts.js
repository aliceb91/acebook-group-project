const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.get("/:id/comment", PostsController.ShowComment);
router.post("/", PostsController.Create);
router.post("/:id/like", PostsController.Like);
router.post("/:id/unlike", PostsController.Unlike);
router.post("/:id/comment", PostsController.Comment);
router.delete("/:id", PostsController.Delete);
router.patch("/:id", PostsController.RemoveComment)

module.exports = router;
