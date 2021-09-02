const mongoose = require('mongoose');

const SubscribersSchema = mongoose.Schema({
    email: {
        type: String
    },
    date: {
        type: String,
    }
});

const Subscibers = mongoose.model('Subscribers', SubscribersSchema);
module.exports = Subscibers;