const router = require("express").Router();
const UserSchema = require("../../schema/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/signup").post(async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const dateOfBirth = req.body.dateOfBirth;
  const avatar = req.body.avatar;
  const gender = req.body.gender;
  const role = req.body.role;

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
      const access_token = jwt.sign({ email, role }, env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      const user = new UserSchema({
        userName: userName,
        email: email,
        password: hashedPassword,
        dateOfBirth: dateOfBirth,
        avatar: avatar,
        gender: gender,
        role: role,
      });
      user.save();
      let data = [];
      data.push({
        userName: user.userName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        avatar: user.avatar,
        gender: user.gender,
        role: user.role,
      });
      res.json({ user: data, access_token: access_token, success: true });
    }
  });
});

module.exports = router;
