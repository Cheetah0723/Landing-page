const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/public", express.static(process.env.PWD + "/public"));

app.use(express.json());


mongoose.connect(
    "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/rest?retryWrites=true&w=majority",
    () => {
      console.log('Connected TO Database')
    },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

// routes
/* example:
    const AboutChange = require("./router/about/change/AboutChangeRouter");
    app.use("/api", AboutChange);
*/

const Subscribers = require('./router/subscribers/SubscribersRouter');
app.use('/api', Subscribers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listen ${PORT}`);
});
