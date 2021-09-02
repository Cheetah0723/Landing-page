const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const SubscribersSchema = mongoose.Schema({
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Subscibers = mongoose.model("Subscribers", SubscribersSchema);
module.exports = Subscibers;
