const router = require("express").Router();
const loginMiddlewares = require("../../../middlewares/loginMiddlewares");

router
  .route("/checkifuser")
  .all(loginMiddlewares)
  .post(async (req, res) => {
    if (req.role == "user") {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });

module.exports = router;
