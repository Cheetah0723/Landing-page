const mongoose = require("mongoose");

const DateSchema = mongoose.Schema({
  day: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  dateOfBirth: [DateSchema],
  avatar: {
    type: String,
    trim: true,
    default: "assets/images/default.png",
  },
  gender: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;
