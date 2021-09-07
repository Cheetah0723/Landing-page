const router = require("express").Router();
const User = require("../../schema/user/user");
const jwt = require("jsonwebtoken");
const env = require("../../../env.json");

router.route("/forgot-password").put(async (req, res) => {
  const { email } = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists." });
    }
    const token = jwt.sign({ _id: user._id }, env.RESET_PASSWORD_KEY, {
      expiresIn: "20m",
    });
    const data = {
      from: "noreply@hello.com",
      to: email,
      subject: "Account Activation Link",
      html: `<h2>Please click on given link to reset your password</h2>
        <p>http://localhost:3000/authentication/activate/${token}</p>`,
    };
    return user.updateOne({ resetLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({ error: "Reset password link error" });
      }
    });
  });
});

module.exports = router;
