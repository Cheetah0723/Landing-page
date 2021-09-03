const router = require('express').Router();
const Notifications = require('../../schema/notifications/NotificationsSchema');
const Products = require("../../schema/notifications/NotificationsSchema");


router.route("/notifications").post(async (req, res) => {
    const Notification = new Notifications({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    });
    try {
        const savedNotification = Notification.save();
        res.json({ success: true });
    } catch (err) {
        res.json({ message: err });
    }
});

router.route('/notifications').get(async (req, res) => {
    try {
        const notifications = await Notifications.find();
        res.json({ notifications });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;