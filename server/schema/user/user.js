const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    avatar: {
        type: String,
        default: "assets/images/default.png"
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
    }
});

const User = new mongoose.model("User", UserSchema);
module.exports = User;