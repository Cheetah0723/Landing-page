const router = require("express").Router();
const UserSchema = require("../../schema/user/user");
const bcrypt = require("bcrypt");

router.route("/signup").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    throw err;
  }

  UserSchema.findOne({ email: email }).then((result) => {
    if (result) {
      res.json({ message: "Email is registered", success: false });
    } else {
      const user = new UserSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      }).save();
    }
  });
  res.json({ success: true });
});

module.exports = router;
