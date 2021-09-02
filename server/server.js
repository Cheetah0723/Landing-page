const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/rest?retryWrites=true&w=majority",
  () => {
    console.log("database is connected");
  },
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Subscribers = require("./router/subscribers/SubscribersRouter");
app.use("/api", Subscribers);

const Sponsors = require("./router/sponsors/SponsorsRouter");
app.use("/api", Sponsors);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listen ${PORT}`);
});
