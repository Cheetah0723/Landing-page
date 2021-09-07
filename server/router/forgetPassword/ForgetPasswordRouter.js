const router = require("express").Router();
const User = require("../../schema/user/user");

router.route("/forgot-password").put(async (req, res) => {
  const { email } = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists." });
    }
  });
});

module.exports = router;
