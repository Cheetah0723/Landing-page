const router = require("express").Router();
const Subscribers = require("../../schema/subscribers/Subscribers");

router.route("/subscriber").post(async (req, res) => {
  const Subscriber = new Subscribers({
    email: req.body.email,
    date: req.body.date,
  });

  try {
    const savedSubscriber = await Subscriber.save();
    res.json(savedSubscriber);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
