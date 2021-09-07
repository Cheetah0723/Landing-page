const router = require("express").Router();
const UserSchema = require("../../schema/user/user");

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

  if (role == "date") {
    // date logic
  } else {
    // password logic
  }
});

module.exports = router;
