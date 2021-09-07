const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Subscribers = require("./router/subscribers/SubscribersRouter");
app.use("/api", Subscribers);

const Sponsors = require("./router/sponsors/SponsorsRouter");
app.use("/api", Sponsors);

const Products = require("./router/products/ProductsRouter");
app.use("/api", Products);

const Notifications = require("./router/notifications/NotificationsRouter");
app.use("/api", Notifications);

const Signup = require("./router/Signup/SignupRouter");
app.use("/api", Signup);

const Login = require("./router/login/LoginRouter");
app.use("/api", Login);

const ForgotPassword = require("./router/forgotpassword/ForgotPasswordRouter");
app.use("/api", ForgotPassword);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`server listen at ${PORT}`);
});
