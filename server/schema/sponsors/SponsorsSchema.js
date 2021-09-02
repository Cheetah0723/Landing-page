const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const SponsorsSchema = mongoose.Schema({
  image: {
    type: String,
  },
});

const Sponsors = mongoose.model("sponsors", SponsorsSchema);
module.exports = Sponsors;
