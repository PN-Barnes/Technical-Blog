const router = require("express").Router();
const { Post, User } = require("../models");
const authorize = require("../utils/authorize");

router.get(`/`, authorize, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = userPosts.get({
      plain: true,
    });

    res.render("profilePost", {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
