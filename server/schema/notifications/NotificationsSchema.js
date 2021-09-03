const mongoose = require("mongoose");

const NotificationsSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    versionKey: false
});

const Notifications = mongoose.model("Notifications", NotificationsSchema);
module.exports = Notifications;