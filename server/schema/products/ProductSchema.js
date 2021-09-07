const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const Products = mongoose.model("products", ProductsSchema);
module.exports = Products;
