const router = require("express").Router();
const Sponsors = require("../../schema/sponsors/SponsorsSchema");

router.route("/sponsors").post(async (req, res) => {
  Sponsors.find({}).then((res2) => {
    let data = [];
    res2.map((item) => {
      data.push({
        image: item.image,
      });
    });
    res.json({ data: data });
  });
});

module.exports = router;
