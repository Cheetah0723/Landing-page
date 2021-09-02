const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    name: {
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
