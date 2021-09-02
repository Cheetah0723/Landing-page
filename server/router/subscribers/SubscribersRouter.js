const router = require("express").Router();
const Subscribers = require("../../schema/subscribers/Subscribers");

router.route("/subscriber").post(async (req, res) => {
  const Subscriber = new Subscribers({
    email: req.body.email,
    date: req.body.date,
  });
  Subscriber.save();
  res.json({ success: true });
});

module.exports = router;
