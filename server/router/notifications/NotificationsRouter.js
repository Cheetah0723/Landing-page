const router = require("express").Router();
const Notifications = require("../../schema/notifications/NotificationsSchema");

router.route("/notifications").post(async (req, res) => {
  const Notification = new Notifications({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  try {
    const savedNotification = Notification.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ message: err });
  }
});

router.route("/notifications/read").get(async (req, res) => {
  try {
    let data = [];
    const notifications = await Notifications.find();
    notifications.map((item) => {
      data.push({
        title: item.title,
        description: item.description,
        image: item.image,
      });
    });
    res.json({ data });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
