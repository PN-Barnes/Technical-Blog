const router = require("express").Router();
const { Post } = require("../../models");
const authorize = require("../../utils/authorize");

// * SUCCESSFUL POST ROUTE
router.post("/", authorize, async (req, res) => {
  try {
    const newBlogPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
