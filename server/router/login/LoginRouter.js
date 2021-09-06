const router = require("express").Router();
const UserSchema = require("../../schema/user/user");
const bcrypt = require("bcrypt");

router.route("/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  UserSchema.findOne({ email: email }).then((result) => {
    if (result == null) {
      res.json({ message: "User does not exist", success: false });
    } else if (result.password.length > 0) {
      bcrypt.compare(password, result.password, (err, verified) => {
        if (verified) {
          user = result;
          res.json({
            user: {
              firstName: result.firstName,
              lastName: result.lastName,
              email: result.email,
              dateOfBirth: result.dateOfBirth,
              avatar: result.avatar,
              gender: result.gender,
              role: result.role
            },
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
