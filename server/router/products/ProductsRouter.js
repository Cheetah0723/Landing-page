const router = require("express").Router();
const Products = require("../../schema/products/ProductSchema");

router.route("/products").get(async (req, res) => {
  try {
    const products = await Products.find();
    let data = [];
    products.map((item) => {
      data.push({
        title: item.title,
        image: item.image,
        price: item.price,
      });
    });
    res.json({ data });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
