const router = require("express").Router();
const { Post } = require("../../models");
const authorize = require("../../utils/authorize");

router.post("/", authorize);

module.exports = router;
