const router = require("express").Router();
const { User } = require("../../models");

router.post("/");

// * This route will work to log the user in by checking the credentials with the database and return the session id with a response
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userdate, message: "You are loggedn in" });
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// * this route will work to destroy the session when the user wishes to logout
router.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch {}
});

module.exports = router;
