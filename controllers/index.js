const router = require("express").Router();

const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboardRoutes");
const postRoute = require("./postRoute");

router.use("/", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/post", postRoute);

module.exports = router;
