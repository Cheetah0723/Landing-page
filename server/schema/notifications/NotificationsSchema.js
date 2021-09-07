const mongoose = require("mongoose");

const LanguageSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const NotificationsSchema = mongoose.Schema(
  {
    ge: [LanguageSchema],
    en: [LanguageSchema],
  },
  {
    versionKey: false,
  }
);

const Notifications = mongoose.model("Notifications", NotificationsSchema);
module.exports = Notifications;
