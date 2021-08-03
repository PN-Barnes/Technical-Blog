const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const blogData = posts.map((blogPost) => blogPost.get({ plain: true }));

    res.render("dashboard", blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
