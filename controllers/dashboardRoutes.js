const router = require("express").Router();
const { Post, User } = require("../models");
const authorize = require("../utils/authorize");

router.get("/", authorize, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const blogData = posts.map((blogPost) => blogPost.get({ plain: true }));

    res.render("dashboard", { blogData, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
