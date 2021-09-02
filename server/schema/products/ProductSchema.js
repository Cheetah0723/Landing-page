const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
}, 
{
    versionKey: false
});

const Procucts = mongoose.model("Procucts", ProductsSchema)
module.exports = Procucts;
