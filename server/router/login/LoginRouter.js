const router = require("express").Router();
const UserSchema = require("../../schema/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  UserSchema.findOne({ email: email }).then((result) => {
    if (result == null) {
      res.json({ message: "User does not exist", success: false });
    } else if (result.password.length > 0) {
      bcrypt.compare(password, result.password, (err, verified) => {
        if (verified) {
          const email = result.email;
          const role = result.role;
          const access_token = jwt.sign({ email, role }, env.ACCESS_TOKEN, {
            expiresIn: "1h",
          });
          user = result;
          res.json({
            user: {
              userName: result.userName,
              email: result.email,
              dateOfBirth: result.dateOfBirth,
              avatar: result.avatar,
              role: result.role,
            },
            access_token: access_token,
            success: true,
          });
        } else {
          res.json({ message: "The password is incorrect", success: false });
        }
      });
    }
  });
});

module.exports = router;
