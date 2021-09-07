const router = require("express").Router();
const UserSchema = require("../../schema/user/user");
const bcrypt = require("bcrypt");

router.route("/forgotPassword").post(async (req, res) => {
  const email = req.body.email;

  UserSchema.findOne({ email: email }).then((result) => {
    if (result == null) {
      res.json({ message: "User does not exist", success: false });
    } else {
      if (typeof result.password == "string") {
        res.json({ message: "Authenticate with Date", success: false });
      } else {
        // future we need logic for password array.
        res.json({ message: "Authenticate with Password", success: false });
      }
    }
  });
  //   res.json("1");
});

router.route("/forgotPassword/submit").post(async (req, res) => {
  const role = req.body.role;
  const email = req.body.email;
  const password = req.body.password;

  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }

  if (role == "date") {
    // date logic
    UserSchema.findOne({ email: email }).then((result) => {
      const day = req.body.day;
      const month = req.body.month;
      const year = req.body.year;

      result.dateOfBirth.map((item) => {
        if (item.day == day && item.month == month && item.year == year) {
          result.password = hashedPassword;
          result.save();
        } else {
          res.json({ message: "Information is invalid", success: false });
        }
        console.log(item);
      });
    });
  } else {
    // future we need here password logic
  }
});

module.exports = router;
