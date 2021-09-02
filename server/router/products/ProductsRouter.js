const router = require('express').Router();
const Products = require("../../schema/products/ProductSchema");

router.route('/products').post(async (req, res) => {
    const Product = new Products({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    });

    try {
        const savedProduct = await Product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});




module.exports = router;