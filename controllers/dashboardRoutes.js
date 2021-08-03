const router = require("express").Router();
const { Post, User } = require("../models");
const { post } = require("./api/userRoutes");

router.get("/", async (req, res) => {
  const posts = await post.findAll({});
});
