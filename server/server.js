const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

app.use(express.json());

// mongoose.connect(
//     "mongodb+srv://epsybsu:nikanikonika@cluster0.un7ei.mongodb.net/epsybsu?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );

// routes
/* example:
    const AboutChange = require("./router/about/change/AboutChangeRouter");
    app.use("/api", AboutChange);
*/

const PORT = 3001;

app.listen(PORT, () => {
  console.log("server listen 3001 port");
});
