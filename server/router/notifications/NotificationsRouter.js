const router = require("express").Router();
const Notifications = require("../../schema/notifications/NotificationsSchema");

// router.route("/notifications").post(async (req, res) => {
//   const Notification = new Notifications({
//     title: req.body.title,
//     description: req.body.description,
//     image: req.body.image,
//   });
//   try {
//     const savedNotification = Notification.save();
//     res.json({ success: true });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.route("/notifications/read").post(async (req, res) => {
  const lang = req.body.lang;
  console.log(lang);

  if (lang == "en") {
    Notifications.find().then((result) => {
      res.json({ data: result[0].en });
    });
  } else {
    Notifications.find().then((result) => {
      res.json({ data: result[0].ge });
    });
  }
});

module.exports = router;
